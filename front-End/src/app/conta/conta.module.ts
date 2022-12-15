import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { ContaRoutingModule } from './conta-routing.module';
import { ContaComponent } from './conta/conta/conta.component';
import { ContaPipe } from './conta.pipe';


@NgModule({
  declarations: [
    ContaComponent,
    ContaPipe
  ],
  imports: [
    CommonModule,
    ContaRoutingModule,
    AppMaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class ContaModule { }
