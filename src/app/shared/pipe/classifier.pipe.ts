import {Pipe, PipeTransform} from '@angular/core';
import {getClassifierLabel} from "../classifier/classifier-util";
import {Classifier} from "../classifier/classifier";

@Pipe({
	name: 'classifier',
})
export class ClassifierPipe implements PipeTransform {

	transform(classifier: string, classifiers: Classifier[]): string {
		return getClassifierLabel(classifier, classifiers);
	}
}
