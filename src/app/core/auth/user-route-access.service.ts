import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {StateStorageService} from './state-storage.service';
import {AccountService} from "./account.service";

@Injectable({providedIn: 'root'})
export class UserRouteAccessService {
  constructor(private router: Router,
              private accountService: AccountService,
              private stateStorageService: StateStorageService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.accountService.identity().pipe(
      map(account => {
        if (account) {
          const authorities = route.data['authorities'];

          if (!authorities || authorities.length === 0 || this.accountService.hasAnyAuthority(authorities)) {
            return true;
          }

          this.router.navigate(['accessdenied']);
          return false;
        }

        this.stateStorageService.storeUrl(state.url);
        this.router.navigate(['/login']);
        return false;
      })
    );
  }
}
