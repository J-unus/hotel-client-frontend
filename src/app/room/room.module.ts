import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {RoomComponent} from "./room/room.component";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";
import {RoomCardComponent} from "./room/room-card/room-card.component";
import {MatCardModule} from "@angular/material/card";
import {TranslateModule} from "@ngx-translate/core";
import {RoomDetailComponent} from "./room-detail/room-detail.component";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule} from "@angular/forms";
import {RoomBookingComponent} from "./room-booking/room-booking.component";
import {UserRouteAccessService} from "../core/auth/user-route-access.service";
import {Authority} from "../core/auth/authority.constant";

const routes: Routes = [
  {
    path: '',
    component: RoomComponent,
  },
  {
    path: ':roomId/details',
    component: RoomDetailComponent,
  },
  {
    path: ':roomId/booking',
    data: {
      authorities: [Authority.USER],
    },
    canActivate: [UserRouteAccessService],
    component: RoomBookingComponent,
  },
];

@NgModule({
  declarations: [RoomComponent, RoomCardComponent, RoomDetailComponent, RoomBookingComponent],
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    CommonModule,
    SharedModule,
    MatCardModule,
    TranslateModule,
    MatCheckboxModule,
  ]
})
export class RoomModule {
}
