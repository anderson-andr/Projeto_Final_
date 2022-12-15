
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthGuard } from '../authGuard';

import { ServicoFormComponent } from './servico-form/servico-form.component';
import { ServicosComponent } from './servicos/servicos.component';
import { ServicosResolver } from './guards/servicos.resolver';

const routes: Routes = [
  {

  path:'',
  component:ServicosComponent},
        {path:'novo',  component:ServicoFormComponent,  resolve:{servico:ServicosResolver} ,canActivate:[AuthGuard]},
        {path:'editar/:id',  component:ServicoFormComponent, resolve:{servico:ServicosResolver}}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule {


 }
