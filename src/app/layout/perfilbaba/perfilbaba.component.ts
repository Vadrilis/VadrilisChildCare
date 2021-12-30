import { Component, OnInit } from '@angular/core';
import { Baba } from "../../../shared/model/baba";
import {BabaService} from "../../../shared/services/serviceBaba/baba.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AfterViewInit, ViewChild} from '@angular/core';
import {ComentarioService} from "../../../shared/services/serviceComentario/comentario.service";
import {MatTableDataSource} from "@angular/material/table";
import {Comentario} from "../../../shared/model/comentario";

@Component({
  selector: 'app-perfilbaba',
  templateUrl: './perfilbaba.component.html',
  styleUrls: ['./perfilbaba.component.scss']
})
export class PerfilbabaComponent implements OnInit {

  baba:Baba;
  constructor(private babaService: BabaService, private roteador: Router, private rotaAtual: ActivatedRoute) {
    //if (this.rotaAtual.snapshot.paramMap.has('id')) {
    const idParaDetalhar = Number(this.rotaAtual.snapshot.paramMap.get('id'));
    this.babaService.pesquisarPorId(idParaDetalhar).subscribe(babaRetornada => this.baba = babaRetornada);
    //}
  }

  ngOnInit(): void {

  }

}

