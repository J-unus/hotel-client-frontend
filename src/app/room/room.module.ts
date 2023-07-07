import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {RoomComponent} from "./room/room.component";
import {UiModule} from "@egov/cvi-ng";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";

const routes: Routes = [
  {
    path: '',
    component: RoomComponent,
  },
];

@NgModule({
  declarations: [RoomComponent],
  imports: [RouterModule.forChild(routes), UiModule, CommonModule, SharedModule]
})
export class RoomModule { }
