import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Servico } from '../model/servico';
import { ServicosService } from '../services/servicos.service';

@Injectable({
  providedIn: 'root'
})



export class ServicosResolver implements Resolve<Servico> {
  constructor (private service: ServicosService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Servico> {
    if(route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }
    return of ({ _id:'', descricao:'',tipo:'', valor: 0, usuario:'',foto:''});
  }
}
