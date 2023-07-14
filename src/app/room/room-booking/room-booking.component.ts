import {Component, OnInit} from "@angular/core";
import {RoomService} from "../service/room.service";
import {ActivatedRoute, Router} from "@angular/router";
import {RoomDto} from "../dto/room.dto";
import {BookingService} from "../service/booking.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AccountService} from "../../core/auth/account.service";
import * as moment from "moment";
import {Moment} from "moment";
import {getDaysDiff} from "../../core/util/date-util";
import {BACKEND_DATE_FORMAT} from "../../core/util/constant";

@Component({
  selector: 'app-room-booking',
  templateUrl: './room-booking.component.html',
  styleUrls: ['./room-booking.component.scss'],
})
export class RoomBookingComponent implements OnInit {
  startDate: Moment;
  endDate: Moment;
  room: RoomDto;
  acceptTerms = false;

  accountForm = new FormGroup({
    firstName: new FormControl<string>('', {
      nonNullable: true,
      validators: [
        Validators.required,
      ],
    }),
    lastName: new FormControl<string>('', {
      nonNullable: true,
      validators: [
        Validators.required,
      ],
    }),
    identityNumber: new FormControl<string>('', {
      nonNullable: true,
      validators: [
        Validators.required,
      ],
    }),
    email: new FormControl<string>('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.email
      ],
    }),
  });

  constructor(private roomService: RoomService,
              private bookingService: BookingService,
              private accountService: AccountService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const roomId = +params['roomId'];
      this.roomService.getById(roomId).subscribe(room => {
        this.room = room;
      })
    });

    this.activatedRoute.queryParams.subscribe(queryParams => {
      this.startDate = moment(queryParams['startDate']);
      this.endDate = moment(queryParams['endDate']);
    });
    this.accountService.identity(true).subscribe((account) => {
      if (account) this.accountForm.patchValue(account)
    })
  }

  book(): void {
    this.accountService.save(this.accountForm.getRawValue()).subscribe(() => {
      this.bookingService.book(this.room.id, {
        startDate: this.startDate.format(BACKEND_DATE_FORMAT),
        endDate: this.endDate.format(BACKEND_DATE_FORMAT)
      }).subscribe(() => {
        this.router.navigate(['completed'], {
          relativeTo: this.activatedRoute,
        });
      });
    });
  }

  getCalculatedPrice(): number {
    return this.room.oneNightPriceInCents * getDaysDiff(this.startDate, this.endDate) / 100;
  }
}
