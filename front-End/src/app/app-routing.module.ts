import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: 'home',
  loadChildren: () => import('./home/home.module').then(m => m.HomeModule)

  },
  {
    path: 'servicos',
    loadChildren: () => import('./servicos/services.module').then(m => m.ServicesModule)

  },

  { path: 'login',
  loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },

  { path: 'cadastro',
  loadChildren: () => import('./cadastro/cadastro.module').then(m => m.CadastroModule)
  },
  { path: 'conta',
  loadChildren: () => import('./conta/conta.module').then(m => m.ContaModule)
  },
  { path: 'usuario',
  loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule)
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
