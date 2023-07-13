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

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    data: {
      authorities: [Authority.ADMIN],
    },
    canActivate: [UserRouteAccessService],
  }
];

@NgModule({
  declarations: [AdminComponent],
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    CommonModule,
    SharedModule,
    TranslateModule,
    MatCardModule,
  ]
})
export class AdminModule {
}
