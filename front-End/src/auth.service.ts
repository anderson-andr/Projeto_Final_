import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApiService } from './app/api-service';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { Usuario } from './app/login/model/login';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  public readonly TOKEN_NAME = 'x-auth-token'
  isLoggedIn$ = this._isLoggedIn$.asObservable();


  constructor(private apiService: ApiService,
    private router: Router ) {
    const token = localStorage.getItem(this.TOKEN_NAME);
    const user =  localStorage.getItem('usuario')
    this._isLoggedIn$.next(!!token);


  }
  get token(){
     return JSON.parse((JSON.stringify(localStorage.getItem(this.TOKEN_NAME))));



  }

  get Usuario () {
    return JSON.parse((JSON.stringify(localStorage.getItem('Usuario'))));


  }


  login(email: string, senha: string) {
    return this.apiService.login(email, senha).pipe(
      tap((response) => {
        this._isLoggedIn$.next(true);
        let token = JSON.parse(JSON.stringify(response)).token.split(' ')[0];
        let user =JSON.parse(JSON.stringify(response)).user.split(' ')[0];
        localStorage.setItem(this.TOKEN_NAME, token)
        localStorage.setItem('Usuario',user)

        console.log(this.Usuario)



      })
    );
  }
  deslogar() {
    localStorage.removeItem(this.TOKEN_NAME);
    this.router.navigate(['login']);
}
  getAuthorizationToken() {
    const token = window.localStorage.getItem(this.TOKEN_NAME);
    return token

  }

  getTokenExpirationDate(token: any) :Date{

    const decoded: any = jwt_decode(token);

    if (decoded.exp == undefined) {
      return  decoded;
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }


  isTokenExpired(token?: string): boolean {
    if (!token) {
      return true;
    }

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) {
      return false;
    }

    return !(date.valueOf() > new Date().valueOf());
  }

  isUserLoggedIn() {
    const token = this.getAuthorizationToken();
    if (!token) {
      return false;
    } else if (this.isTokenExpired(token)) {
      return false;
    }
    return true;

  }



}





