import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {BookingService} from "../../room/service/booking.service";
import {BookingDto} from "../../room/dto/booking.dto";
import {getDaysDiff} from "../../core/util/date-util";
import {MatDialog} from "@angular/material/dialog";
import {CancelDialogComponent} from "../../shared/cancel-dialog/cancel-dialog.component";
import {RateDialogComponent} from "../../shared/rate-dialog/rate-dialog.component";

@Component({
  selector: 'app-booking-card',
  templateUrl: './booking-card.component.html',
  styleUrls: ['./booking-card.component.scss'],
})
export class BookingCardComponent implements OnInit {
  @Input() booking: BookingDto;
  @Input() canCancel = false;
  @Output() dataEvent: EventEmitter<void> = new EventEmitter<void>();
  nightsOfStay: number;
  stars: number[] = [1, 2, 3, 4, 5];

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
          this.dataEvent.emit();
        });
      }
    })
  }

  rate(): void {
    const dialogRef = this.dialog.open(RateDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.bookingService.rate(this.booking.id, result).subscribe(() => {
          this.dataEvent.emit();
        });
      }
    })
  }
}
