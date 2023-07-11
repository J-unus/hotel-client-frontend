import {Component, OnInit} from "@angular/core";
import {BookingDto} from "../dto/booking-dto";
import {priceRange, roomAmount} from "../../shared/classifier/classifier";
import {RoomService} from "../service/room.service";
import {RoomDto} from "../dto/room.dto";
import {HttpResponse} from "@angular/common/http";
import {ASCENDING, DESCENDING} from "../../shared/util/constant";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import * as moment from "moment";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html'
})
export class RoomComponent implements OnInit {
  totalItems = 0;
  itemsPerPage = 20;
  ascending = true;
  roomAmountClassifier = roomAmount;
  priceRangeClassifier = priceRange;
  bookingDto = new BookingDto();
  rooms: RoomDto[] = [];

  roomFilterForm = new FormGroup({
    startDate: new FormControl<string>('2023-01-01', {
      nonNullable: true,
      validators: [
        Validators.required,
      ],
    }),
    endDate: new FormControl<string>('2023-01-05', {
      nonNullable: true,
      validators: [
        Validators.required,
      ],
    }),
    roomAmounts: new FormControl([], {
    }),
    priceRanges: new FormControl([], {
    }),
  });

  constructor(private roomService: RoomService) {
  }

  ngOnInit(): void {
    this.search();
  }

  search(): void {
    const params = {
      page: 0,
      size: this.itemsPerPage,
      sort: `roomPrices.oneNightPriceInCents,${this.ascending ? ASCENDING : DESCENDING}`,
      ...this.roomFilterForm.getRawValue(),
    }
    this.roomService.query(params).subscribe((res: HttpResponse<RoomDto[]>) => {
      this.rooms = res.body ? res.body : [];
      this.bookingDto.startDate = moment(this.roomFilterForm.controls.startDate.value)
      this.bookingDto.endDate = moment(this.roomFilterForm.controls.endDate.value)
    });
  }
}
