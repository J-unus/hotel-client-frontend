import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {RoomDto} from "../dto/room.dto";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private readonly RESOURCE_URL: string = environment.hotelApi + '/public-api/room';

  constructor(private http: HttpClient) {
  }

  query(params: any): Observable<HttpResponse<RoomDto[]>> {
    return this.http.get<RoomDto[]>(this.RESOURCE_URL + '/rooms', { params: params, observe: 'response' });
  }

  getById(id: number): Observable<RoomDto> {
    return this.http.get<RoomDto>(this.RESOURCE_URL + '/rooms/' + id);
  }
}
