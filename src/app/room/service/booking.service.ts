import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {BookingDto} from "../dto/booking-dto";

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private readonly RESOURCE_URL: string = environment.hotelApi + '/public-api/booking';

  constructor(private http: HttpClient) {
  }

  getVisitorBookings(): Observable<BookingDto[]> {
    return this.http.get<BookingDto[]>(this.RESOURCE_URL + '/bookings/visitor');
  }

  getBookingList(): Observable<BookingDto[]> {
    return this.http.get<BookingDto[]>(this.RESOURCE_URL + '/bookings/employee');
  }

  book(roomId: number, data: any): Observable<void> {
    return this.http.post<void>(this.RESOURCE_URL + '/book/room/' + encodeURIComponent(roomId), data);
  }

  cancel(id: number): Observable<void> {
    return this.http.post<void>(this.RESOURCE_URL + '/bookings/' + encodeURIComponent(id), null);
  }
}
