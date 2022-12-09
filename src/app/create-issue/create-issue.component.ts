import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiService, Issue} from "../services/api.service";


@Component({
  selector: 'app-create-issue',
  templateUrl: './create-issue.component.html',
  styleUrls: ['./create-issue.component.scss']
})
export class CreateIssueComponent implements OnInit{

  name!:string;
  email!: string;
  phoneNumber!: string;
  town!: string;
  address!: string;
  issueTypeId!: string;
  issueCanalType!: string;
  issueMessage!: string;
  types:any
  issue!: Issue
  i!: Issue
  issues!: any

  formdata!: FormGroup;

  constructor(private router: Router, private api: ApiService) {
  }

  async ngOnInit() {
    await this.api.getAllTypes().subscribe((value: any) => {
      this.types = value
      console.log('type', this.types)
    })
    this.formdata = new FormGroup({
      name: new FormControl("", Validators.compose([
        Validators.required
      ])),
      email: new FormControl("", Validators.compose([
        Validators.required
      ])),
      phoneNumber: new FormControl("", Validators.compose([
        Validators.required
      ])),
      town: new FormControl("", Validators.compose([
        Validators.required
      ])),
      address: new FormControl("", Validators.compose([
        Validators.required
      ])),
      issueTypeId: new FormControl("", Validators.compose([
        Validators.required
      ])),
      issueCanalType: new FormControl("", Validators.compose([
        Validators.required
      ])),
      issueMessage: new FormControl("", Validators.compose([
        Validators.required
      ])),

    })
  }

  onClickSubmit(data: Issue) {
    this.name = data.name;
    this.email = data.email;
    this.phoneNumber = data.phoneNumber;
    this.town = data.town;
    this.address = data.address;
    this.issueTypeId = data.issueTypeId;
    this.issueCanalType = data.issueCanalType;
    this.issueMessage = data.issueMessage;

    const i = {
      name: this.name,
      email: this.email,
      phoneNumber: this.phoneNumber,
      town: this.town,
      address: this.address,
      issueTypeId: this.issueTypeId,
      issueCanalType: this.issueCanalType,
      issueMessage: this.issueMessage,
    }
    this.api.saveIssue(i).subscribe((val) => {
      console.log(val)
    })
    this.router.navigate(['/list'])
  }

}
