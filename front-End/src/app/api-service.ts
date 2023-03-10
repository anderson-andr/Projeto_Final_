
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly API = 'http://localhost:3000/api/login';

  constructor(private http: HttpClient) {}


  login(email: string, senha: string) {
    return this.http.post(this.API, { email, senha });
  }


}
