import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute,Router} from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { AuthService } from 'src/auth.service';
import { Usuario } from '../model/usuario';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})

export class UsuarioComponent implements OnInit {
  Usuario$: Observable<Usuario[]>;
  displayedColumns = ['nome', 'email', 'actions'];
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private httpClient: HttpClient,
    private UsuarioService: UsuarioService,
    public dialog: MatDialog
  )
    {
      //this.coursesService = new CoursesService();

      this.Usuario$ = this.UsuarioService.list().pipe(
        catchError((error) => {
          this.onErro('Erro ao carregar. ');
          return of([]);
        })
      );
    }

    ngOnInit(): void {

    }
    onErro(errorMsg: string) {
      this.dialog.open(ErrorDialogComponent, {
        data: errorMsg,
      });
    }


    onEdit(usuario: Usuario) {
      this.router.navigate(['editar', usuario._id], { relativeTo: this.route });
    }

  }






