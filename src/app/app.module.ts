import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RiaComponentLibraryModule} from "ria-components-angular";
import * as EasyMDE from 'easymde';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RiaComponentLibraryModule,
    EasyMDE
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
