import {Component, Input, OnInit} from "@angular/core";
import {RoomDto} from "../../dto/room.dto";
import {BookingDto} from "../../dto/booking-dto";
import {facility} from "../../../core/classifier/classifier";
import {getDaysDiff} from "../../../core/util/date-util";
import {DISPLAY_DATE_FORMAT} from "../../../core/util/constant";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.scss'],
})
export class RoomCardComponent implements OnInit {
  @Input() room: RoomDto;
  @Input() booking: BookingDto;

  facilityClassifier = facility;
  private nightsOfStay: number;

  constructor(private translateService: TranslateService) {
  }

  ngOnInit(): void {
    this.nightsOfStay = getDaysDiff(this.booking.startDate, this.booking.endDate);
  }

  getBookingTimeString(): string {
    const nightsOfStayString = this.translateService.instant('room.card.nights', {number: this.nightsOfStay});
    return this.booking.startDate.format(DISPLAY_DATE_FORMAT) + ' - ' + this.booking.endDate.format(DISPLAY_DATE_FORMAT)
      + ' ' + nightsOfStayString;
  }

  getCalculatedPrice(): string {
    return (this.room.oneNightPriceInCents * this.nightsOfStay / 100).toFixed(0);
  }
}

