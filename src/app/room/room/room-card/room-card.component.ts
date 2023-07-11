import {Component, Input, OnInit} from "@angular/core";
import {RoomDto} from "../../dto/room.dto";
import {BookingDto} from "../../dto/booking-dto";
import {facility} from "../../../shared/classifier/classifier";
import {getDaysDiff} from "../../../shared/util/date-util";
import {DISPLAY_DATE_FORMAT} from "../../../shared/util/constant";

@Component({
  selector: 'app-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.scss'],
})
export class RoomCardComponent implements OnInit {
  facilityClassifier = facility;

  @Input() room: RoomDto;
  @Input() booking: BookingDto;
  private nightsOfStay: number;

  ngOnInit(): void {
    this.nightsOfStay = getDaysDiff(this.booking.startDate, this.booking.endDate);
  }

  getBookingTimeString(): string {
    return this.booking.startDate.format(DISPLAY_DATE_FORMAT) + ' - ' + this.booking.endDate.format(DISPLAY_DATE_FORMAT)
      + ' (' + this.nightsOfStay + ' ööd)';
  }

  getCalculatedPrice(): string {
    return (this.room.oneNightPriceInCents * this.nightsOfStay / 100).toFixed(2);
  }
}

