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
import {MatCardModule} from "@angular/material/card";
import {MatDialogModule} from "@angular/material/dialog";
import {InputComponent} from "./input/input.component";
import {BackButtonComponent} from "./back-button/back-button.component";
import {DateFormatPipe} from "./pipe/date-format.pipe";
import {AlertMessageComponent} from "./alert-message/alert-message.component";

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    DatepickerComponent,
    SelectComponent,
    ClassifierPipe,
    DateFormatPipe,
    InputComponent,
    BackButtonComponent,
    AlertMessageComponent,
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
    MatCardModule,
    MatDialogModule,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    DatepickerComponent,
    SelectComponent,
    ClassifierPipe,
    DateFormatPipe,
    InputComponent,
    BackButtonComponent,
    AlertMessageComponent,
  ]
})
export class SharedModule {
}
