import { Component, OnInit } from '@angular/core';
import {Babysitter} from "../../../shared/model/babysitter";
import {BabysitterService} from "../../../shared/services/babysitter.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-listagem-baba',
  templateUrl: './listagem-baba.component.html',
  styleUrls: ['./listagem-baba.component.scss']
})
export class ListagemBabaComponent implements OnInit {

  babysitters: Array<Babysitter>;

  constructor(private babysitterService: BabysitterService, private roteador: Router){
  }

  ngOnInit(): void{
    this.babysitterService.listar().subscribe(
      babysitters => this.babysitters = babysitters,
      erro => {
        alert(erro.message);
      }
    );
  }

  /*editar(babysitter: Babysitter):void{
    this.roteador.navigate(['cadastrarbabysitter', babysitter.id]);
  }

  remover(babysitter: Babysitter):void {
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
