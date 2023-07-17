import {Component, OnInit} from "@angular/core";
import {BookingService} from "../../room/service/booking.service";
import {ActivatedRoute} from "@angular/router";
import {BookingPastFutureWithBookerDto} from "../../room/dto/booking.dto";

@Component({
  selector: 'app-admin-booking',
  templateUrl: './admin-booking.component.html',
  styleUrls: ['./admin-booking.component.scss'],
})
export class AdminBookingComponent implements OnInit {
  bookings: BookingPastFutureWithBookerDto;
  hasAnyFutureBookings = false;
  hasAnyPastBookings = false;
  private roomId: number;

  constructor(private bookingService: BookingService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.roomId = +params['roomId'];
      this.loadData();
    });
  }

  private loadData(): void {
    this.bookingService.getPastAndFutureBookingsByRoomId(this.roomId).subscribe(result => {
      this.bookings = result;
      this.hasAnyFutureBookings = result?.futureBookings?.length > 0;
      this.hasAnyPastBookings = result?.pastBookings?.length > 0;
    });
  }

  handleCancel(): void {
    this.loadData();
  }
}
