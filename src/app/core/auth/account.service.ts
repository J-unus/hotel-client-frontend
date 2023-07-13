import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {SessionStorageService} from 'ngx-webstorage';
import {catchError, Observable, of, ReplaySubject, shareReplay, tap} from 'rxjs';
import {environment} from "../../../environments/environment";
import {AccountDto} from "./account.dto";
import {StateStorageService} from "./state-storage.service";
import {Router} from "@angular/router";

@Injectable({providedIn: 'root'})
export class AccountService {
  private readonly RESOURCE_URL: string = environment.hotelApi + '/api';

  private userIdentity: AccountDto | null = null;
  private authenticationState = new ReplaySubject<AccountDto | null>(1);
  private accountCache$?: Observable<AccountDto> | null;

  constructor(private translateService: TranslateService,
              private sessionStorageService: SessionStorageService,
              private stateStorageService: StateStorageService,
              private router: Router,
              private http: HttpClient) {
  }

  save(account: AccountDto): Observable<{}> {
    return this.http.post(this.RESOURCE_URL + '/account', account);
  }

  authenticate(identity: AccountDto | null): void {
    this.userIdentity = identity;
    this.authenticationState.next(this.userIdentity);
    if (!identity) {
      this.accountCache$ = null;
    }
  }

  hasAnyAuthority(authorities: string[] | string): boolean {
    if (!this.userIdentity) {
      return false;
    }
    if (!Array.isArray(authorities)) {
      authorities = [authorities];
    }
    return this.userIdentity.authorities.some((authority: string) => authorities.includes(authority));
  }

  identity(force?: boolean): Observable<AccountDto | null> {
    if (!this.accountCache$ || force) {
      this.accountCache$ = this.fetch().pipe(
        tap((account: AccountDto) => {
          this.authenticate(account);

          this.navigateToStoredUrl();
        }),
        shareReplay()
      );
    }
    return this.accountCache$.pipe(catchError(() => of(null)));
  }

  isAuthenticated(): boolean {
    return this.userIdentity !== null;
  }

  getAuthenticationState(): Observable<AccountDto | null> {
    return this.authenticationState.asObservable();
  }

  private fetch(): Observable<AccountDto> {
    return this.http.get<AccountDto>(this.RESOURCE_URL + '/account');
  }

  private navigateToStoredUrl(): void {
    // previousState can be set in the authExpiredInterceptor and in the userRouteAccessService
    // if login is successful, go to stored previousState and clear previousState
    const previousUrl = this.stateStorageService.getUrl();
    if (previousUrl) {
      this.stateStorageService.clearUrl();
      this.router.navigateByUrl(previousUrl);
    }
  }
}
