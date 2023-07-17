import {
  Component,
  OnInit,
} from "@angular/core";
import {TranslateService} from "@ngx-translate/core";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit {
  errorMessage: string;

  constructor(private translateService: TranslateService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(routeData => {
      if (routeData['errorMessage']) {
        this.errorMessage = routeData['errorMessage'];
      }
    });
  }
}
