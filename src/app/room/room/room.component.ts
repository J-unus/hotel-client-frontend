import {Component, OnInit} from "@angular/core";
import {RoomFilterDto} from "../dto/room-filter.dto";
import {priceRange, roomAmount} from "../../shared/classifier/classifier";
import {RoomService} from "../service/room.service";
import {RoomDto} from "../dto/room.dto";
import {HttpResponse} from "@angular/common/http";
import {ASCENDING, DESCENDING} from "../../shared/util/constant";
import {FormControl, FormGroup, Validators} from "@angular/forms";

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
  roomFilterDto = new RoomFilterDto();
  rooms: RoomDto[] = [];

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
    roomAmounts: new FormControl([], {
    }),
    priceRanges: new FormControl([], {
    }),
  });

  constructor(private roomService: RoomService) {
  }

  ngOnInit(): void {
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
    });
  }
}
