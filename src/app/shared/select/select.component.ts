import {Component, Input} from "@angular/core";
import {Classifier} from "../../core/classifier/classifier";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent {
  @Input() control: FormControl;
  @Input() placeholder: string;
  @Input() options: Classifier[] = [];
}

