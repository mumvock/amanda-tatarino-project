import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from '../shared/angular-material.module';

import { FeaturesComponent } from './features.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContainerComponent } from './container/container.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    FeaturesComponent,
    NavbarComponent,
    ContainerComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    FeaturesComponent,
  ]
})
export class FeaturesModule { }
