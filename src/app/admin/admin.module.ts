import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";
import {TranslateModule} from "@ngx-translate/core";
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {AdminComponent} from "./admin.component";
import {Authority} from "../core/auth/authority.constant";
import {UserRouteAccessService} from "../core/auth/user-route-access.service";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {AdminBookingComponent} from "./admin-booking/admin-booking.component";
import {MatTabsModule} from "@angular/material/tabs";
import {AdminBookingCardComponent} from "./admin-booking-card/admin-booking-card.component";

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    data: {
      authorities: [Authority.ADMIN],
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':roomId/booking',
    component: AdminBookingComponent,
    data: {
      authorities: [Authority.ADMIN],
    },
    canActivate: [UserRouteAccessService],
  }
];

@NgModule({
  declarations: [AdminComponent, AdminBookingComponent, AdminBookingCardComponent],
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    CommonModule,
    SharedModule,
    TranslateModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatTabsModule,
  ]
})
export class AdminModule {
}
