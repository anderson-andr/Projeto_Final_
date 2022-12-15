import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

import { AuthService } from '../../../auth.service';
import { Servico } from '../model/servico';

@Injectable({
  providedIn: 'root',
})
export class ServicosService {
  private readonly API = 'http://localhost:3000/api/servicos';
  private readonly API1 = 'http://localhost:3000/api/servico/listar';
  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  list() {
    return this.httpClient
      .get<Servico[]>(this.API + '?usuario=' + this.authService.Usuario)
      .pipe(
        first(),
        tap((servico) => console.log(servico))
      );
  }

  save(record: Partial<Servico>) {
    console.log(record);
    if (record._id) {
      console.log('update');
      return this.update(record);
    }
    console.log('create');
    return this.create(record);
  }
  private create(record: Partial<Servico>) {
    return this.httpClient.post<Servico>(this.API, record).pipe(first());
  }
  private update(record: Partial<Servico>) {
    return this.httpClient
      .put<Servico>(`${this.API}/${record._id}`, record)
      .pipe(first());
  }

  loadById(id: string) {
    return this.httpClient.get<Servico>(`${this.API}/${id}`);
  }

  listAll() {
    return this.httpClient.get<Servico[]>(this.API1).pipe(
      first(),
      tap((servico) => servico)
    );
  }
  delete(servico: Servico) {
    return this.httpClient.delete<Servico>(this.API + '/' + servico._id);
  }
}
