import { Component, OnInit } from '@angular/core';
import {Baba} from "../../../shared/model/baba";
import {BabaService} from "../../../shared/services/serviceBaba/baba.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";


import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';




@Component({
  selector: 'app-listagem-baba',
  templateUrl: './listagem-baba.component.html',
  styleUrls: ['./listagem-baba.component.scss']
})
export class ListagemBabaComponent implements OnInit {
  dataSource: MatTableDataSource<Baba>;
  displayedColumns = ['nome','dataAniversario', 'cep', 'descricao', ' '];

  //constructor(private babaService: BabaService){}



  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private babaService: BabaService, private roteador: Router, private rotaAtual: ActivatedRoute) {
    /*if (this.rotaAtual.snapshot.paramMap.has('id')){
      const idParaDetalhar = Number(this.rotaAtual.snapshot.paramMap.get('id'));
      this.babaService.pesquisarPorId(idParaDetalhar).subscribe(babaRetornada => this.baba = babaRetornada);
    }*/
  }



  ngOnInit():void {
    this.babaService.listarBabas().subscribe(
      bab => this.dataSource = new MatTableDataSource<Baba>(bab)
    );
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  detalhar(bab: Baba):void{
    this.roteador.navigate(['listagembabasemtabela', bab.id]);
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

  /*babysitters: Array<Baba>;
  rating = 0;

  constructor(private babysitterService: BabaService, private roteador: Router) {
  }

  ngOnInit(): void {
    this.babysitterService.listar().subscribe(
      babysittersz => this.babysitters = babysittersz,
      erro => {
        alert(erro.message);
      }
    );
  }

  editar(babysitter: Baba):void{
    this.roteador.navigate(['cadastrarbabysitter', babysitter.id]);
  }

  remover(babysitter: Baba):void {
    this.babysitterService.remover(babysitter.id).subscribe(
      resposta => {
        const indxBabysitterARemover = this.babysitters.findIndex(u=>u.cpf === babysitter.cpf);
        if(indxBabysitterARemover > -1){
          this.babysitters.splice(indxBabysitterARemover, 1);
        }
      }
    )
  }*/
}
