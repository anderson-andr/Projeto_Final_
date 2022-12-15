import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { ServicesRoutingModule } from './services-routing.module';
import { ServicoFormComponent } from './servico-form/servico-form.component';
import { ServicosComponent } from './servicos/servicos.component';

@NgModule({
  declarations: [
    ServicosComponent,
    ServicoFormComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ServicesModule { }
