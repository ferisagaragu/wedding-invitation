import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';
import { ViewGuestComponent } from './view-guest/view-guest.component';
import { SharedModule } from '../../shared/shared.module';
import { TableGuestComponent } from './table-guest/table-guest.component';
import { ChipFilterComponent } from './chip-filter/chip-filter.component';

@NgModule({
  declarations: [
    ViewGuestComponent,
    TableGuestComponent,
    ChipFilterComponent
  ],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    SharedModule
  ]
})
export class ManagementModule { }
