import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {BookingService} from "../../room/service/booking.service";
import {BookingWithBookerDto} from "../../room/dto/booking.dto";
import {getDaysDiff} from "../../core/util/date-util";
import {MatDialog} from "@angular/material/dialog";
import {CancelDialogComponent} from "../../shared/cancel-dialog/cancel-dialog.component";
import {roomType} from "../../core/classifier/classifier";

@Component({
  selector: 'app-admin-booking-card',
  templateUrl: './admin-booking-card.component.html',
  styleUrls: ['./admin-booking-card.component.scss'],
})
export class AdminBookingCardComponent implements OnInit {
  readonly roomTypeClassifier = roomType;
  @Input() booking: BookingWithBookerDto;
  @Input() canCancel = false;
  @Output() cancelEvent: EventEmitter<void> = new EventEmitter<void>();
  nightsOfStay: number;

  constructor(private bookingService: BookingService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.nightsOfStay = getDaysDiff(this.booking.startAt, this.booking.endAt);
  }

  getCalculatedPrice(): number {
    return this.booking.room.oneNightPriceInCents * this.nightsOfStay / 100;
  }

  cancel(): void {
    const dialogRef = this.dialog.open(CancelDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.bookingService.cancel(this.booking.id).subscribe(() => {
          this.cancelEvent.emit();
        });
      }
    })
  }
}
