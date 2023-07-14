import {Injectable, Injector} from "@angular/core";
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";
import {AlertMessageComponent} from "../../shared/alert-message/alert-message.component";
import {TranslateService} from "@ngx-translate/core";

@Injectable({providedIn: 'root'})
export class NotificationService {
  private translateService: TranslateService;

  constructor(private snackBar: MatSnackBar,
              private injector: Injector) {}

  translateAndAlertError(message: string) {
    const translatedMessage = this.getTranslateService().instant(message);
    const config: MatSnackBarConfig = {
      data: { message: translatedMessage },
      verticalPosition: 'top',
      horizontalPosition: 'end'
    };

    this.snackBar.openFromComponent(AlertMessageComponent, config);
  }

  getTranslateService(): TranslateService {
    if (!this.translateService) {
      this.translateService = this.injector.get(TranslateService);
    }
    return this.translateService;
  }
}
