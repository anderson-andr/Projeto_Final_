import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';
import { AuthService } from 'src/auth.service';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private readonly API = 'http://localhost:3000/api/usuarios/usuario';
  constructor(private httpClient: HttpClient,
    private authservice:AuthService) { }


  list(){
    return this.httpClient.get <Usuario[]>(this.API+ '?_id=' + this.authservice.Usuario)
    .pipe (first(),
      tap(Usuario =>  console.log(Usuario)

        )
    );

  }
}
