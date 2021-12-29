import { Component, OnInit } from '@angular/core';
import {Comentario} from "../../../shared/model/comentario";
import {ComentarioService} from "../../../shared/services/serviceComentario/comentario.service";
import {Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";


import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Baba} from "../../../shared/model/baba";
import {BabaService} from "../../../shared/services/serviceBaba/baba.service";

@Component({
  selector: 'app-listagem-comentario',
  templateUrl: './listagem-comentario.component.html',
  styleUrls: ['./listagem-comentario.component.scss']
})
export class ListagemComentarioComponent implements OnInit {

  dataSource: MatTableDataSource<Comentario>;
  displayedColumns = ['mail','mensagem'];


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private comentarioService: ComentarioService) {
  }



  ngOnInit():void {
    this.comentarioService.listarComentarios().subscribe(
      comt => this.dataSource = new MatTableDataSource<Comentario>(comt)
    );
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  filtrar(value: string){
    this.dataSource.filter = value.trim().toUpperCase()
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
