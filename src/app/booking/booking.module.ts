import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";
import {TranslateModule} from "@ngx-translate/core";
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {BookingComponent} from "./booking.component";
import {Authority} from "../core/auth/authority.constant";
import {UserRouteAccessService} from "../core/auth/user-route-access.service";
import {BookingCardComponent} from "./booking-card/booking-card.component";
import {MatIconModule} from "@angular/material/icon";

const routes: Routes = [
  {
    path: '',
    component: BookingComponent,
    data: {
      authorities: [Authority.USER],
    },
    canActivate: [UserRouteAccessService],
  }
];

@NgModule({
  declarations: [BookingComponent, BookingCardComponent],
    imports: [
        RouterModule.forChild(routes),
        FormsModule,
        CommonModule,
        SharedModule,
        TranslateModule,
        MatCardModule,
        MatIconModule,
    ]
})
export class BookingModule {
}
