import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {RoomComponent} from "./room/room.component";
import {UiModule} from "@egov/cvi-ng";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";
import {RoomCardComponent} from "./room/room-card/room-card.component";
import {MatCardModule} from "@angular/material/card";

const routes: Routes = [
  {
    path: '',
    component: RoomComponent,
  },
];

@NgModule({
  declarations: [RoomComponent, RoomCardComponent],
  imports: [RouterModule.forChild(routes), UiModule, CommonModule, SharedModule, MatCardModule]
})
export class RoomModule {
}
