import { Component, OnInit } from '@angular/core';
import {Baba} from "../../../shared/model/baba";
import {BabaService} from "../../../shared/services/serviceBaba/baba.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-listagem-baba',
  templateUrl: './listagem-baba.component.html',
  styleUrls: ['./listagem-baba.component.scss']
})
export class ListagemBabaComponent implements OnInit {

  babysitters: Array<Baba>;
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

  /*editar(babysitter: Baba):void{
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
