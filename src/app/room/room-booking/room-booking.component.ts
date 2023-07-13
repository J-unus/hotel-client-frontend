import {Component, OnInit} from "@angular/core";
import {RoomService} from "../service/room.service";
import {ActivatedRoute, Router} from "@angular/router";
import {RoomDto} from "../dto/room.dto";
import {BookingService} from "../service/booking.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AccountService} from "../../core/auth/account.service";

@Component({
  selector: 'app-room-booking',
  templateUrl: './room-booking.component.html',
  styleUrls: ['./room-booking.component.scss'],
})
export class RoomBookingComponent implements OnInit {
  startDate: string;
  endDate: string;
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
      this.startDate = queryParams['startDate'];
      this.endDate = queryParams['endDate'];
    });
    this.accountService.identity(true).subscribe((account) => {
      this.accountForm.controls.firstName.setValue(<string>account?.firstName);
      this.accountForm.controls.lastName.setValue(<string>account?.lastName);
      this.accountForm.controls.identityNumber.setValue(<string>account?.identityNumber);
      this.accountForm.controls.email.setValue(<string>account?.email);
    })
  }

  book(): void {
    this.bookingService.book(this.room.id, {startDate: this.startDate, endDate: this.endDate}).subscribe(() => {
      this.router.navigate(['completed'], {
        relativeTo: this.activatedRoute,
      });
    });
  }
}
