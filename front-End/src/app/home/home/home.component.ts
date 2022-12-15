
import { Component, OnInit } from '@angular/core';
import { Servico } from 'src/app/servicos/model/servico';
import { ServicosService } from 'src/app/servicos/services/servicos.service';
import { AuthService } from '../../../auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  Servico: Servico[] = [];

  constructor(
    private servico: ServicosService,
    private authService:AuthService
    ){}


  ngOnInit(): void {
    let logado:boolean
     logado =this.authService.isUserLoggedIn()

    if(!logado){
      this.servico.listAll().subscribe(res => {
        this.Servico = res
        console.log(logado)
      })

    }
    this.servico.list().subscribe(res => {
        this.Servico = res
      })





    }






}
