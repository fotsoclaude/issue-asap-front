import {Component, OnInit} from '@angular/core';
import {ApiService, Issue} from "../services/api.service";

@Component({
  selector: 'app-list-issues',
  templateUrl: './list-issues.component.html',
  styleUrls: ['./list-issues.component.scss']
})
export class ListIssuesComponent implements OnInit{
  public issues!: Issue[]

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getIssues();
  }

  getIssues() {
    this.api.getAllIssues().subscribe( (values) => {
      this.issues = values
      console.log('api', this.issues)
      return values
    });
  }
}
