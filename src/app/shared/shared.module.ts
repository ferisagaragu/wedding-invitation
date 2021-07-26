import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';

// @ts-ignore
import { UrxGridModule } from 'ng-urxnium';
import { IvyCarouselModule } from 'angular-responsive-carousel';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatProgressBarModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTooltipModule,
    IvyCarouselModule,
    UrxGridModule
  ],
  exports: [
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatProgressBarModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTooltipModule,
    IvyCarouselModule
  ]
})
export class SharedModule { }
