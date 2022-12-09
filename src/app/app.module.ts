import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateIssueComponent } from './create-issue/create-issue.component';
import { ListIssuesComponent } from './list-issues/list-issues.component';
import { IssueComponent } from './issue/issue.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    CreateIssueComponent,
    ListIssuesComponent,
    IssueComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterLink
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
