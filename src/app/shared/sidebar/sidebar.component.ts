import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AccountService} from "../../core/auth/account.service";
import {Subject, takeUntil} from "rxjs";
import {AccountDto} from "../../core/auth/account.dto";

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, OnDestroy {
  account: AccountDto | null = null;

  private readonly destroy$ = new Subject<void>();

	constructor(private router: Router,
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

  hasAnyAuthority(authorities: string[]): boolean {
    return this.accountService.hasAnyAuthority(authorities);
  }
}
