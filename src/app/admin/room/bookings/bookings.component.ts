import {Component, OnInit} from '@angular/core';
import {AdminBookingService} from "../../service/admin.booking.service";
import {TableBookingDto} from "../dto/table-booking-dto";
import {AdminBookingDto} from "../dto/bookings-dto";
import * as moment from "moment";
import {DISPLAY_DATE_FORMAT} from "../../../core/util/constant";
import {facility, roomAmount} from "../../../core/classifier/classifier";
@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {
  bookings: AdminBookingDto[] = [];
  tableBookings: TableBookingDto[] = [];
  displayedColumns: string[] = ["roomAmount", "dates", "guest", "price"];
  roomAmountClassifier = roomAmount;

  ngOnInit(): void {
    this.getBookings();
  }

  constructor(private adminBookingService: AdminBookingService) {
  }

  private getBookings() {
    this.adminBookingService.getBookingList(0, 10).subscribe((res) => {
      this.bookings = res.content;
      this.tableBookings = res.content.map(booking => {
        return {
          roomAmount: booking.room.roomAmount,
          dates: moment(booking.startAt).format(DISPLAY_DATE_FORMAT) +" - " +moment(booking.endAt).format(DISPLAY_DATE_FORMAT),
          guest: "Test",
          price: 10
        } as TableBookingDto;
      })
    })
  }

  protected readonly facility = facility;
}
