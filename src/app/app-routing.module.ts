import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ErrorComponent} from "./shared/error/error.component";

export const errorRoute: Routes = [
  {
    path: 'accessdenied',
    component: ErrorComponent,
    data: {
      errorMessage: 'error.http.403',
    },
  },
  {
    path: '404',
    component: ErrorComponent,
    data: {
      errorMessage: 'error.http.404',
    },
  },
  {
    path: '**',
    redirectTo: '/404',
  },
];

const routes: Routes = [
  {
    path: 'room',
    loadChildren: () => import('./room/room.module').then(m => m.RoomModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'booking',
    loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: '',
    redirectTo: 'room',
    pathMatch: 'full',
  },
  ...errorRoute,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
