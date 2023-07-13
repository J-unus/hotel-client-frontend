import {Pipe, PipeTransform} from '@angular/core';
import {Moment} from "moment";
import {DISPLAY_DATE_FORMAT} from "../../core/util/constant";

@Pipe({
	name: 'dateFormat',
})
export class DateFormatPipe implements PipeTransform {

	transform(date: Moment): string {
		return date.format(DISPLAY_DATE_FORMAT);
	}
}
