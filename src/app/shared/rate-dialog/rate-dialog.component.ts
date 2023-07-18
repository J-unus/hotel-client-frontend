import {
  Component,
} from "@angular/core";

@Component({
  selector: 'app-rate-dialog',
  templateUrl: './rate-dialog.component.html',
  styleUrls: ['./rate-dialog.component.scss'],
})
export class RateDialogComponent {
  stars: number[] = [1, 2, 3, 4, 5];
  rating: number = 1;

  setRating(star: number): void {
    this.rating = star;
  }
}
