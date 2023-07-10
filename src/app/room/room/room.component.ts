import {Component, OnInit} from "@angular/core";
import {RoomFilterDto} from "../dto/room-filter.dto";
import {priceRange, roomAmount} from "../../shared/classifier/classifier";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html'
})
export class RoomComponent implements OnInit {
  roomAmountClassifier = roomAmount;
  priceRangeClassifier = priceRange;
  roomFilterDto = new RoomFilterDto();

  ngOnInit(): void {
  }
}
