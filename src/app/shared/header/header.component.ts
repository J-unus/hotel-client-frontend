import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AccountService} from "../../core/auth/account.service";
import {LoginService} from "../../core/auth/login.service";
import {StateStorageService} from "../../core/auth/state-storage.service";
import {Subject, takeUntil} from "rxjs";
import {AccountDto} from "../../core/auth/account.dto";

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  account: AccountDto | null = null;

  private readonly destroy$ = new Subject<void>();

	constructor(private router: Router,
              private loginService: LoginService,
              private stateStorageService: StateStorageService,
              private accountService: AccountService) {
  }

  ngOnInit(): void {
    this.accountService.identity().subscribe((account) => {
      this.account = account;
    });
    this.accountService
      .getAuthenticationState()
      .pipe(takeUntil(this.destroy$))
      .subscribe(account => (this.account = account));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

	navigate(link: string) {
		this.router.navigate([link]);
	}

  logout(): void {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }

  login(): void {
    this.stateStorageService.storeUrl(this.router.url);
    this.router.navigate(['/login']);
  }
}
