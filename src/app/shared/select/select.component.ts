import {Component, Input} from "@angular/core";
import {Classifier} from "../../core/classifier/classifier";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent {
  @Input() multiSelect = false;
  @Input() placeholder = '';
  @Input() selected: any[] = [];
  @Input() options: Classifier[] = [];
}

