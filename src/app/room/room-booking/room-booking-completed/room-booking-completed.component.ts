import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-room-booking-completed',
  templateUrl: './room-booking-completed.component.html',
  styleUrls: ['./room-booking-completed.component.scss'],
})
export class RoomBookingCompletedComponent {

  constructor(private router: Router) {
  }

  navigate(): void {
    this.router.navigate(['room']);
  }
}
