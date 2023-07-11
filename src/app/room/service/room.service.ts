import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {RoomDto} from "../dto/room.dto";

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private readonly RESOURCE_URL: string = 'http://localhost:8080/public-api/room';

  constructor(private http: HttpClient) {
  }

  query(params: any): Observable<HttpResponse<RoomDto[]>> {
    return this.http.get<RoomDto[]>(this.RESOURCE_URL + '/rooms', { params: params, observe: 'response' });
  }
}
