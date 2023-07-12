import {Component, OnInit} from "@angular/core";
import {RoomService} from "../service/room.service";
import {ActivatedRoute} from "@angular/router";
import {RoomDto} from "../dto/room.dto";
import {facility} from "../../core/classifier/classifier";

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.scss'],
})
export class RoomDetailComponent implements OnInit {
  facilityClassifier = facility;

  startDate: string;
  endDate: string;
  room: RoomDto;
  acceptTerms = false;

  constructor(private roomService: RoomService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const roomId = +params['id'];
      this.roomService.getById(roomId).subscribe(room => {
        this.room = room;
      })
    });

    this.route.queryParams.subscribe(queryParams => {
      this.startDate = queryParams['startDate'];
      this.endDate = queryParams['endDate'];
    });
  }

  book() {
  }
}
