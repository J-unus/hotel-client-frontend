import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {BookingDateDto, BookingPastFutureDto} from "../dto/booking.dto";

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private readonly RESOURCE_URL: string = environment.hotelApi + '/public-api/booking';

  constructor(private http: HttpClient) {
  }

  getVisitorBookings(): Observable<BookingDateDto[]> {
    return this.http.get<BookingDateDto[]>(this.RESOURCE_URL + '/bookings/visitor');
  }

  getBookingList(): Observable<BookingDateDto[]> {
    return this.http.get<BookingDateDto[]>(this.RESOURCE_URL + '/bookings/employee');
  }

  book(roomId: number, data: any): Observable<void> {
    return this.http.post<void>(this.RESOURCE_URL + '/book/room/' + encodeURIComponent(roomId), data);
  }

  cancel(id: number): Observable<void> {
    return this.http.post<void>(this.RESOURCE_URL + '/bookings/' + encodeURIComponent(id), null);
  }

  getPastAndFutureBookings(): Observable<BookingPastFutureDto> {
    return this.http.get<BookingPastFutureDto>(this.RESOURCE_URL + '/bookings/past-future');
  }
}
