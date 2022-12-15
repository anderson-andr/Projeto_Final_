import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable, take, tap  } from 'rxjs';
import { Usuario } from '../../usuario/model/usuario';
import { AuthService } from '../../../auth.service';


@Injectable({
  providedIn: 'root'
})
export class ContaService {
  private readonly API = 'http://localhost:3000/api/usuarios/usuario';
  constructor(private httpClient: HttpClient,
  private authservice:AuthService) { }

  list(){
    return this.httpClient.get <Usuario[]>(this.API+ '?_id=' + this.authservice.Usuario)
    .pipe (first(),
      tap(Usuario => {
         const nome = Usuario[0].nome
         localStorage.setItem('Nome', nome)


        })
    );

  }



}





