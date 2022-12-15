import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../authGuard';
import { CadastroComponent } from '../cadastro/cadastro/cadastro.component';
import { ContaComponent } from './conta/conta/conta.component';

const routes: Routes = [
  {
    path:'',
    component:ContaComponent,
  }




];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContaRoutingModule { }
