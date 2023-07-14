import {Component, Input, OnInit} from "@angular/core";
import {RoomDto} from "../../dto/room.dto";
import {facility} from "../../../core/classifier/classifier";
import {getDaysDiff} from "../../../core/util/date-util";
import {BACKEND_DATE_FORMAT, DISPLAY_DATE_FORMAT} from "../../../core/util/constant";
import {TranslateService} from "@ngx-translate/core";
import {ActivatedRoute, Router} from "@angular/router";
import {BookingDateDto} from "../../dto/booking.dto";

@Component({
  selector: 'app-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.scss'],
})
export class RoomCardComponent implements OnInit {
  @Input() room: RoomDto;
  @Input() booking: BookingDateDto;

  facilityClassifier = facility;
  private nightsOfStay: number;

  constructor(private translateService: TranslateService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.nightsOfStay = getDaysDiff(this.booking.startDate, this.booking.endDate);
  }

  getBookingTimeString(): string {
    const nightsOfStayString = this.translateService.instant('room.details.nights', {number: this.nightsOfStay});
    return this.booking.startDate.format(DISPLAY_DATE_FORMAT) + ' - ' + this.booking.endDate.format(DISPLAY_DATE_FORMAT)
      + ' (' + nightsOfStayString + ')';
  }

  getCalculatedPrice(): number {
    return this.room.oneNightPriceInCents * this.nightsOfStay / 100;
  }

  navigateToDetails() {
    this.router.navigate([`${this.room.id}/details`], {
      relativeTo: this.activatedRoute,
      queryParams: {
        startDate: this.booking.startDate.format(BACKEND_DATE_FORMAT),
        endDate: this.booking.endDate.format(BACKEND_DATE_FORMAT),
      }
    });
  }
}

