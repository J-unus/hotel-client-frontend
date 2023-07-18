import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {BookingPastFutureDto, BookingPastFutureWithBookerDto} from "../dto/booking.dto";

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private readonly RESOURCE_URL: string = environment.hotelApi + '/public-api/booking';

  constructor(private http: HttpClient) {
  }

  book(roomId: number, data: any): Observable<void> {
    return this.http.post<void>(this.RESOURCE_URL + '/book/room/' + encodeURIComponent(roomId), data);
  }

  cancel(id: number): Observable<void> {
    return this.http.post<void>(this.RESOURCE_URL + '/bookings/' + encodeURIComponent(id) + '/cancel', null);
  }

  getPastAndFutureBookings(): Observable<BookingPastFutureDto> {
    return this.http.get<BookingPastFutureDto>(this.RESOURCE_URL + '/bookings/past-future');
  }

  getPastAndFutureBookingsByRoomId(roomId: number): Observable<BookingPastFutureWithBookerDto> {
    return this.http.get<BookingPastFutureWithBookerDto>(this.RESOURCE_URL + '/bookings/' + encodeURIComponent(roomId) + '/past-future');
  }

  rate(id: number, rating: number): Observable<void> {
    return this.http.post<void>(this.RESOURCE_URL + '/bookings/' + encodeURIComponent(id) + '/rate/' + rating, null);
  }
}
