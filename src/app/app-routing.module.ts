import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateIssueComponent} from "./create-issue/create-issue.component";
import {ListIssuesComponent} from "./list-issues/list-issues.component";


const routes: Routes = [
    {path:"create", component:CreateIssueComponent},
    {path:"list", component:ListIssuesComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
