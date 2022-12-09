import {Component, Input} from '@angular/core';
import {Issue} from "../services/api.service";

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.scss']
})
export class IssueComponent {
  @Input() issue!: any;
}
