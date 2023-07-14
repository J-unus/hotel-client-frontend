import {Component, Input, OnInit} from "@angular/core";
import {BookingService} from "../../room/service/booking.service";
import {BookingDto} from "../../room/dto/booking.dto";
import {getDaysDiff} from "../../core/util/date-util";

@Component({
  selector: 'app-booking-card',
  templateUrl: './booking-card.component.html',
  styleUrls: ['./booking-card.component.scss'],
})
export class BookingCardComponent implements OnInit {
  @Input() booking: BookingDto;
  nightsOfStay: number;

  constructor(private bookingService: BookingService) {
  }

  ngOnInit(): void {
    this.nightsOfStay = getDaysDiff(this.booking.startAt, this.booking.endAt);
  }

  getCalculatedPrice(): number {
    return this.booking.room.oneNightPriceInCents * this.nightsOfStay / 100;
  }

  cancel(): void {

  }
}
