import {NgModule} from "@angular/core";
import {HeaderComponent} from "./header/header.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {DatepickerComponent} from "./datepicker/datepicker.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {SelectComponent} from "./select/select.component";
import {MatSelectModule} from "@angular/material/select";
import {MatSliderModule} from "@angular/material/slider";
import {MatInputModule} from "@angular/material/input";
import {ClassifierPipe} from "./pipe/classifier.pipe";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    DatepickerComponent,
    SelectComponent,
    ClassifierPipe,
  ],
  imports: [
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSelectModule,
    MatSliderModule,
    MatInputModule,
    TranslateModule,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    DatepickerComponent,
    SelectComponent,
    ClassifierPipe,
  ]
})
export class SharedModule {
}
