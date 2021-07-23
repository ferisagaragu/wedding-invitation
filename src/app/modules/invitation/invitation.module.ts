import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvitationRoutingModule } from './invitation-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TitleComponent } from './title/title.component';
import { GuestMessageComponent } from './guest-message/guest-message.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    DashboardComponent,
    TitleComponent,
    GuestMessageComponent
  ],
  imports: [
    CommonModule,
    InvitationRoutingModule,
    SharedModule
  ]
})
export class InvitationModule { }
