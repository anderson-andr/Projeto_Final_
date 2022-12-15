import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

import { LoginService } from '../services/login.service';

import jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../../../auth.service';
import { Usuario } from '../model/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(
    private service: LoginService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private location: Location,
    private router: Router,
    private route: ActivatedRoute,
    private authService:AuthService
  ) {
    this.form = this.formBuilder.group({
      email: [null],
      senha: [null],
    });
  }

  ngOnInit(): void {

  }
  onLogar() {
    this.authService.login(this.form.get('email')?.value, this.form.get('senha')?.value).subscribe(
      (result) => {
        this.onSucess();


      },
      (error) => this.onError()
    );
  }
  onCancel() {
    this.location.back();
  }

  private onSucess() {
    this.snackBar.open('Login realizado com sucesso!', '', {
      duration: 5000,

    });
    this.router.navigate(['/conta'], { relativeTo: this.route });

  }
  private onError() {
    this.snackBar.open('Erro ao efetuar login!', '', { duration: 5000 });
  }





}



