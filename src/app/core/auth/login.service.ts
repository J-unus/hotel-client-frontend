import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {mergeMap} from 'rxjs/operators';
import {AccountDto} from "./account.dto";
import {AccountService} from "./account.service";
import {AuthServerProvider} from "./auth-jwt.service";

@Injectable({providedIn: 'root'})
export class LoginService {
  constructor(private accountService: AccountService, private authServerProvider: AuthServerProvider) {
  }

  login(credentials: any): Observable<AccountDto | null> {
    console.log(credentials)
    return this.authServerProvider.login(credentials).pipe(mergeMap(() => this.accountService.identity(true)));
  }

  logout(): void {
    this.authServerProvider.logout().subscribe({complete: () => this.accountService.authenticate(null)});
  }
}
