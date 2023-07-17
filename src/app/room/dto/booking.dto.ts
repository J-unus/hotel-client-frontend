import {Moment} from "moment";
import {RoomDto} from "./room.dto";
import {AccountDto} from "../../core/auth/account.dto";

export class BookingDto {
  public id: number
  public room: RoomDto;
  public canceled: boolean;
  public startAt: string;
  public endAt: string;
}

export class BookingWithBookerDto extends BookingDto {
  public booker : AccountDto;
}

export class BookingDateDto {
  public startDate: Moment;
  public endDate: Moment;
}

export class BookingPastFutureDto {
  public pastBookings: BookingDto[];
  public futureBookings: BookingDto[];
}

export class BookingPastFutureWithBookerDto {
  public pastBookings: BookingWithBookerDto[];
  public futureBookings: BookingWithBookerDto[];
}
