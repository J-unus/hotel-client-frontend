import {Moment} from "moment";
import {RoomDto} from "./room.dto";

export class BookingDto {
  public room: RoomDto;
  public canceled: boolean;
  public startAt: string;
  public endAt: string;
}

export class BookingDateDto {
  public startDate: Moment;
  public endDate: Moment;
}

export class BookingPastFutureDto {
  public pastBookings: BookingDto[];
  public futureBookings: BookingDto[];
}
