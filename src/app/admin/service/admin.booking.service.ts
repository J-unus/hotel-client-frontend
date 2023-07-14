import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {BookingPage} from "../room/dto/bookings-dto";
import {BookingDateDto} from "../../room/dto/booking.dto";

@Injectable({
  providedIn: 'root'
})
export class AdminBookingService {
  private readonly RESOURCE_URL: string = environment.hotelApi + '/public-api/booking';

  constructor(private http: HttpClient) {
  }

  getVisitorBookings(): Observable<BookingDateDto[]> {
    return this.http.get<BookingDateDto[]>(this.RESOURCE_URL + '/bookings/visitor');
  }

  getBookingList(page: number, size: number): Observable<BookingPage> {
    return this.http.get<BookingPage>(this.RESOURCE_URL + '/bookings/employee', {params: {page, size}});
  }

  book(roomId: number, data: any): Observable<void> {
    return this.http.post<void>(this.RESOURCE_URL + '/book/room/' + encodeURIComponent(roomId), data);
  }

  cancel(id: number): Observable<void> {
    return this.http.post<void>(this.RESOURCE_URL + '/bookings/' + encodeURIComponent(id), null);
  }
}
