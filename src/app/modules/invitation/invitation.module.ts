import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvitationRoutingModule } from './invitation-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TitleComponent } from './title/title.component';


@NgModule({
  declarations: [
    DashboardComponent,
    TitleComponent
  ],
  imports: [
    CommonModule,
    InvitationRoutingModule
  ]
})
export class InvitationModule { }
