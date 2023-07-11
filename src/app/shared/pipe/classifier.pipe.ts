import {Pipe, PipeTransform} from '@angular/core';
import {getClassifierLabel} from "../../core/classifier/classifier-util";
import {Classifier} from "../../core/classifier/classifier";

@Pipe({
	name: 'classifier',
})
export class ClassifierPipe implements PipeTransform {

	transform(classifier: string, classifiers: Classifier[]): string {
		return getClassifierLabel(classifier, classifiers);
	}
}
