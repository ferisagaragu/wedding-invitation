import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvitationRoutingModule } from './invitation-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TitleComponent } from './title/title.component';
import { GuestMessageComponent } from './guest-message/guest-message.component';
import { SharedModule } from '../../shared/shared.module';
import { DedicationComponent } from './dedication/dedication.component';
import { GodparentsComponent } from './godparents/godparents.component';
import { BiblicalQuoteComponent } from './biblical-quote/biblical-quote.component';
import { TimerComponent } from './timer/timer.component';
import { MomentComponent } from './moment/moment.component';
import { LocationComponent } from './location/location.component';
import { AdviceComponent } from './advice/advice.component';
import { GiftComponent } from './gift/gift.component';


@NgModule({
  declarations: [
    DashboardComponent,
    TitleComponent,
    GuestMessageComponent,
    DedicationComponent,
    GodparentsComponent,
    BiblicalQuoteComponent,
    TimerComponent,
    MomentComponent,
    LocationComponent,
    AdviceComponent,
    GiftComponent
  ],
  imports: [
    CommonModule,
    InvitationRoutingModule,
    SharedModule
  ]
})
export class InvitationModule { }
