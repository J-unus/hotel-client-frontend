import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject, Input,
  OnDestroy,
} from "@angular/core";
import {MatCalendar} from "@angular/material/datepicker";
import {DateAdapter, MAT_DATE_FORMATS, MatDateFormats} from "@angular/material/core";
import {Subject, takeUntil} from "rxjs";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
})
export class DatepickerComponent {
  @Input() startDate = '';
  @Input() endDate = '';
  @Input() startPlaceholder = '';
  @Input() endPlaceholder = '';

  datePickerHeader = DatePickerHeader;
}

@Component({
  selector: 'date-picker-header',
  styles: [
    `
      .date-picker-header {
        display: flex;
        align-items: center;
        background-color: var(--color-sapphire-blue-10);
        color: white;
      }

      .date-picker-header-label {
        flex: 1;
        height: 1em;
        font-weight: 500;
        text-align: center;
      }

      .date-picker-icon {
        font-size: 1.3em;
      }
    `,
  ],
  template: `
    <div class="date-picker-header">
      <button mat-icon-button (click)="previousClicked()">
        <mat-icon class="date-picker-icon">keyboard_arrow_left</mat-icon>
      </button>
      <span class="date-picker-header-label">{{periodLabel}}</span>
      <button mat-icon-button (click)="nextClicked()">
        <mat-icon class="date-picker-icon">keyboard_arrow_right</mat-icon>
      </button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
})
export class DatePickerHeader<D> implements OnDestroy {
  private _destroyed = new Subject<void>();

  constructor(
    private _calendar: MatCalendar<D>,
    private _dateAdapter: DateAdapter<D>,
    @Inject(MAT_DATE_FORMATS) private _dateFormats: MatDateFormats,
    cdr: ChangeDetectorRef,
  ) {
    _calendar.stateChanges.pipe(takeUntil(this._destroyed)).subscribe(() => cdr.markForCheck());
  }

  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }

  get periodLabel() {
    return this._dateAdapter
      .format(this._calendar.activeDate, this._dateFormats.display.monthYearLabel)
      .toLocaleUpperCase();
  }

  previousClicked() {
    this._calendar.activeDate = this._dateAdapter.addCalendarMonths(this._calendar.activeDate, -1);
  }

  nextClicked() {
    this._calendar.activeDate = this._dateAdapter.addCalendarMonths(this._calendar.activeDate, 1);
  }
}
