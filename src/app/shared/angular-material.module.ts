import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list'; 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    MatDividerModule,
    MatListModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    MatDividerModule,
    MatListModule
  ]
})
export class AngularMaterialModule { }
