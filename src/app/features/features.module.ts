import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from '../shared/angular-material.module';

import { FeaturesComponent } from './features.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContainerComponent } from './container/container.component';
import { MoreAboutComponent } from './more-about/more-about.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    FeaturesComponent,
    NavbarComponent,
    ContainerComponent,
    MoreAboutComponent,
    MainComponent
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
