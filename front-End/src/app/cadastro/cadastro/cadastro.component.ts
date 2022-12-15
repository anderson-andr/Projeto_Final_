import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

import { CadastroService } from '../services/cadastro.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  form: FormGroup;

  constructor( private formBuilder: FormBuilder,
    private service:CadastroService,
    private snackBar: MatSnackBar,
    private location:Location,
    private router: Router,
    private route : ActivatedRoute ) {
      this.form = this.formBuilder.group( {
         _id:[null],
          nome:[null],
          email:[null],
          senha:[null],
          tipo_Perfil:[null]



      });

  }

  ngOnInit(): void {
  }

 onSubmit (){
    this.service.save(this.form.value)
    .subscribe( result => this.onSucess(), error => this.onError()

    );


 }
 onCancel() {
  this.location.back();


 }

 private onSucess(){
  this.snackBar.open('Cadastro realizado com sucesso!','',{duration:5000});
  this.router.navigate(['/login'], {relativeTo:this.route});
 }
 private onError () {
  this.snackBar.open('Erro ao salvar usuario','',{duration:5000});
 }

}
