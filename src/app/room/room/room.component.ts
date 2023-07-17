import {Component} from "@angular/core";
import {priceRange, roomAmount} from "../../core/classifier/classifier";
import {RoomService} from "../service/room.service";
import {RoomDto} from "../dto/room.dto";
import {HttpResponse} from "@angular/common/http";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import * as moment from "moment";
import {BookingDateDto} from "../dto/booking.dto";
import {NotificationService} from "../../core/service/notification.service";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
})
export class RoomComponent {
  private readonly MAX_BOOKING_TIME_IN_YEARS = 1;
  totalItems = 0;
  itemsPerPage = 20;
  sort = 'asc';
  readonly roomAmountClassifier = roomAmount;
  readonly priceRangeClassifier = priceRange;
  bookingDto = new BookingDateDto();
  rooms: RoomDto[] = [];
  displayNoResults = false;
  minDate = new Date();
  maxDate = new Date(new Date().setFullYear(this.minDate.getFullYear() + this.MAX_BOOKING_TIME_IN_YEARS));

  roomFilterForm = new FormGroup({
    startDate: new FormControl<string>('', {
      nonNullable: true,
      validators: [
        Validators.required,
      ],
    }),
    endDate: new FormControl<string>('', {
      nonNullable: true,
      validators: [
        Validators.required,
      ],
    }),
    roomAmount: new FormControl(null),
    priceRange: new FormControl(null),
  });

  constructor(private roomService: RoomService,
              private notificationService: NotificationService) {
  }

  search(): void {
    if (!this.roomFilterForm.valid) {
      this.notificationService.translateAndAlertError('serverMessage.error.booking.datesRequired');
      return;
    }
    const params = {
      page: 0,
      size: this.itemsPerPage,
      sort: `roomPrices.oneNightPriceInCents,${this.sort}`,
      ...this.roomFilterForm.getRawValue(),
    }
    this.roomService.query(params).subscribe((res: HttpResponse<RoomDto[]>) => {
      this.rooms = res.body ? res.body : [];
      this.displayNoResults = this.rooms.length === 0;
      this.bookingDto.startDate = moment(this.roomFilterForm.controls.startDate.value)
      this.bookingDto.endDate = moment(this.roomFilterForm.controls.endDate.value)
    });
  }
}
