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
import {CancelDialogComponent} from "./cancel-dialog/cancel-dialog.component";
import {A11yModule} from "@angular/cdk/a11y";
import {ChipComponent} from "./chip/chip.component";
import {MatIconModule} from "@angular/material/icon";
import {ErrorComponent} from "./error/error.component";
import {RateDialogComponent} from "./rate-dialog/rate-dialog.component";

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
    CancelDialogComponent,
    ChipComponent,
    ErrorComponent,
    RateDialogComponent,
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
    A11yModule,
    MatIconModule,
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
    CancelDialogComponent,
    ChipComponent,
    ErrorComponent,
    RateDialogComponent,
  ]
})
export class SharedModule {
}
