import {Component, OnInit} from "@angular/core";
import {RoomService} from "../service/room.service";
import {ActivatedRoute, Router} from "@angular/router";
import {RoomDto} from "../dto/room.dto";
import {BookingService} from "../service/booking.service";

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
      this.startDate = queryParams['startDate'];
      this.endDate = queryParams['endDate'];
    });
  }

  book(): void {
    this.bookingService.book(this.room.id, {startDate: this.startDate, endDate: this.endDate}).subscribe(() => {
      this.router.navigate(['completed'], {
        relativeTo: this.activatedRoute,
      });
    });
  }
}
