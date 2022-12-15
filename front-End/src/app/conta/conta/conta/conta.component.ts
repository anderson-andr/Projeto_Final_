import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Usuario } from '../../../usuario/model/usuario';
import { UsuarioService } from '../../../usuario/services/usuario.service';




@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.scss'],

})

export class ContaComponent implements  OnInit {




  Usuario: Usuario[] = [];

  constructor(
    private usuario: UsuarioService,
    private router:Router,
    private route: ActivatedRoute  )
  {

  }


  ngOnInit(): void {
    this.usuario.list().subscribe(res => {
      this.Usuario = res
    })


  }


  onListarServicos() {
    this.router.navigate(['/servicos'], { relativeTo: this.route });
  }

  onUsuario() {
    this.router.navigate(['/usuario'], { relativeTo: this.route });
  }


}

