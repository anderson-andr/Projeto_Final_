import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';
import { Servico } from '../model/servico';
import { ServicosService } from '../services/servicos.service';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss']
})
export class ServicosComponent implements OnInit {


  servicos$: Observable <Servico[]>;
  displayedColumns = ['descricao', 'valor','foto','actions'];
  servicos: Servico[] = []

  constructor(private  servicosService : ServicosService,
    public dialog:MatDialog,
    private router: Router,
    private route : ActivatedRoute,

    ) {
    //this.coursesService = new CoursesService();

    this.servicos$ = this.servicosService.list().pipe (

      catchError (error => {
         this.onErro('Erro ao carregar. ')
          return  of([])
      })
    );
  }
  onErro( errorMsg:string) {
    this.dialog.open(ErrorDialogComponent, {
      data:errorMsg
    });
  }

  ngOnInit(): void {
  }

  onAdd() {
    this.router.navigate(['novo'], {relativeTo:this.route});
  }


  onEdit(servico:Servico) {
    this.router.navigate(['editar',servico._id], {relativeTo:this.route});
  }


  refresh() {
    this.servicos$ = this.servicosService.list()
      .pipe(
        catchError(error => {
          this.onErro('Erro ao carregar cursos.');
          return of([])
        })
      );
  }

  onDelete(servico: Servico) {
      this.servicosService.delete(servico).subscribe(data => {
        this.servicos = this.servicos.filter( response => response !==servico)
        alert("Serviço Deletado");
        this.refresh();
      })
  }
}

