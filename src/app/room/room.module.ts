import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {RoomComponent} from "./room/room.component";

const routes: Routes = [
  {
    path: '',
    component: RoomComponent,
  }
];

@NgModule({
  declarations: [RoomComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoomModule { }
