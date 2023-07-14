import {Component, OnInit} from "@angular/core";
import {BookingService} from "../room/service/booking.service";
import {BookingPastFutureDto} from "../room/dto/booking.dto";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  bookings: BookingPastFutureDto;

  constructor(private bookingService: BookingService) {
  }

  ngOnInit(): void {
    this.bookingService.getPastAndFutureBookings().subscribe(result => {
      this.bookings = result;
    });
  }
}
