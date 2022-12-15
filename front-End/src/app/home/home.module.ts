import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ServicesModule } from '../servicos/services.module';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AppMaterialModule,
    ServicesModule
  ]
})
export class HomeModule { }
