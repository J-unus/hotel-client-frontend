import {Component, OnInit} from "@angular/core";
import {RoomService} from "../service/room.service";
import {ActivatedRoute, Router} from "@angular/router";
import {RoomDto} from "../dto/room.dto";
import {facility} from "../../core/classifier/classifier";
import {BookingService} from "../service/booking.service";
import {getDaysDiff} from "../../core/util/date-util";
import * as moment from "moment";
import {Moment} from "moment";

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.scss'],
})
export class RoomDetailComponent implements OnInit {
  facilityClassifier = facility;

  startDate: Moment;
  endDate: Moment;
  room: RoomDto;
  acceptTerms = false;

  constructor(private roomService: RoomService,
              private bookingService: BookingService,
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
  }

  toBooking(): void {
    this.router.navigate([`room/${this.room.id}/booking`], {
      queryParams: {
        startDate: this.startDate,
        endDate: this.endDate,
      }
    });
  }

  getCalculatedPrice(): number {
    return this.room.oneNightPriceInCents * getDaysDiff(this.startDate, this.endDate) / 100;
  }
}
