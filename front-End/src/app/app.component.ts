import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { Location } from '@angular/common';

import { AuthService } from '../auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'Front-End';


  constructor(
    private router: Router,
    private route : ActivatedRoute,
    private location:Location,
    public  authService: AuthService



    ) {

    }

  ngOnInit(): void {


  }


  onLogado () {
        if(this.authService.isUserLoggedIn()){
           return true;

        }else {
          return false;
        }
  }

 onDeslogado() {
  if(!this.authService.isUserLoggedIn()){
    return true;

 }else {
   return false;
 }

 }
  onLogin (){
    this.router.navigate(['login'], {relativeTo:this.route});
    console.log(this.onDeslogado())

  }
  onCadastro (){
    this.router.navigate(['cadastro'], {relativeTo:this.route});
  }
  onBack (){
    this.router.navigate(['home'], {relativeTo:this.route});
  }

  deslogar(){
    window.localStorage.removeItem(this.authService.TOKEN_NAME);
    this.router.navigate(['login'])
    console.log(this.onLogado())
}
  OnConta() {
    this.router.navigate(['conta'])
  }

}






