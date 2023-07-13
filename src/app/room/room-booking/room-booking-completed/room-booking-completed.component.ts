import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-room-booking-completed',
  templateUrl: './room-booking-completed.component.html',
  styleUrls: ['./room-booking-completed.component.scss'],
})
export class RoomBookingCompletedComponent {

  constructor(private route: ActivatedRoute) {
  }

  navigate(): void {
  }
}
