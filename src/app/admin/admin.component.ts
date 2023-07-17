import {Component, OnInit} from "@angular/core";
import {RoomService} from "../room/service/room.service";
import {RoomDto} from "../room/dto/room.dto";
import {roomType} from "../core/classifier/classifier";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  readonly roomTypeClassifier = roomType;
  rooms: RoomDto[]

  constructor(private roomService: RoomService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.roomService.findAll().subscribe(rooms => {
      this.rooms = rooms;
    })
  }

  openRoomBookings(room: RoomDto): void {
    this.router.navigate([`${room.id}/booking`], {
      relativeTo: this.activatedRoute,
    });
  }
}
