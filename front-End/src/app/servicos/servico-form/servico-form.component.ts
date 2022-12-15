import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { AuthService } from '../../../auth.service';
import { Servico } from '../model/servico';
import { ServicosService } from '../services/servicos.service';

@Component({
  selector: 'app-servico-form',
  templateUrl: './servico-form.component.html',
  styleUrls: ['./servico-form.component.scss']
})
export class ServicoFormComponent implements OnInit {
  form: FormGroup;

  constructor( private formBuilder: FormBuilder,
    private service:ServicosService,
    private snackBar: MatSnackBar,
    private location:Location,
    private route :ActivatedRoute,
    private authService : AuthService) {
      this.form = this.formBuilder.group( {
          _id:[null],
          descricao:[null],
          valor:[null],
          tipo:[null],
          foto:[null],
          usuario:[this.authService.Usuario]



      });

  }

  ngOnInit(): void {
    const servico:Servico = this.route.snapshot.data['servico'];
      this.form.setValue ({
        _id:servico._id,
        descricao:servico.descricao,
        tipo:servico.tipo,
        valor:servico.valor,
        foto:servico.foto,
        usuario:this.authService.Usuario
      })
      console.log(servico)
  }

 onSubmit (){
    this.service.save(this.form.value)
    .subscribe( result => this.onSucess(), error => this.onError());


 }
 onCancel() {
  this.location.back();


 }

 private onSucess(){
  this.snackBar.open('Serviço salvo com sucesso!','',{duration:5000});
  this.onCancel();
 }
 private onError () {
  this.snackBar.open('Erro ao salvar serviço','',{duration:5000});
 }
}
