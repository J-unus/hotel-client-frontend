import {Pipe, PipeTransform} from '@angular/core';
import {DISPLAY_DATE_FORMAT} from "../../core/util/constant";
import * as moment from "moment";

@Pipe({
	name: 'dateFormat',
})
export class DateFormatPipe implements PipeTransform {

	transform(date: any): string {
    const momentDate = moment(date);
    if (momentDate.isValid()) {
      return momentDate.format(DISPLAY_DATE_FORMAT);
    }
    return date;
	}
}
