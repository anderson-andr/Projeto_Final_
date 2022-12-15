import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

import { Usuario } from '../../usuario/model/usuario';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly API = 'http://localhost:3000/api/login';
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
    }

   


}
