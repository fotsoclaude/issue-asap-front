import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface Issue {
  name:string,
  email: string,
  phoneNumber: string,
  town: string,
  address: string,
  issueTypeId: string,
  issueCanalType: string,
  issueMessage: string
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = "https://asap-desk.com/api/v0/issue/"
  private typesUrl = "types/"
  private accountCode = '44a256d55dbc';

  constructor(private http: HttpClient) { }

  getAllIssues(): Observable<Issue[]> {
    return this.http.get<Issue[]>(this.baseUrl, {
      params: {
        accountCode: this.accountCode
      },
    });
  }

  saveIssue(issue: Issue): Observable<any> {
    return this.http.post<any>(this.baseUrl, issue, {
      params: {
        accountCode: this.accountCode
      },
    })
  }

  getAllTypes() {
    return this.http.get(this.baseUrl + this.typesUrl, {
      params: {
        accountCode: this.accountCode
      },
    })
  }
}
