import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AccountService} from "../../core/auth/account.service";
import {LoginService} from "../../core/auth/login.service";
import {StateStorageService} from "../../core/auth/state-storage.service";

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

	constructor(private router: Router,
              private loginService: LoginService,
              private stateStorageService: StateStorageService,
              private accountService: AccountService) {
  }

	navigate(link: string) {
		this.router.navigate([link]);
	}

  isAuthenticated(): boolean {
    return this.accountService.isAuthenticated();
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
