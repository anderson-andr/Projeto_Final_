import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable, take, tap } from 'rxjs';
import { Usuario } from '../../usuario/model/usuario';


@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  private readonly API = 'http://localhost:3000/api/cadastro';

  constructor( private httpClient: HttpClient ) { }

  list (){
    return this.httpClient.get <Usuario[]>(this.API)
    .pipe (first(),
      tap(usuarios => console.log(usuarios))
    );

    }
    save(record:Usuario) {
      console.log(record)
      return this.httpClient.post <Usuario>(this.API, record).pipe(first())
     console.log(record)
    }

  }
