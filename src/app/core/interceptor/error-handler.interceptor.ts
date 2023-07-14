import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpErrorResponse, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import {NotificationService} from "../service/notification.service";

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(private notificationService: NotificationService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap({
        error: (err: HttpErrorResponse) => {
          if (err.status === 400 && err.error && err.error.detail && err.error.detail.startsWith('serverMessage.error')) {
            this.notificationService.translateAndAlertError(err.error.detail);
          } else {
            this.notificationService.translateAndAlertError('serverMessage.error.generic');
          }
        },
      })
    );
  }
}
