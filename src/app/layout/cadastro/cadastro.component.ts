import { Component, OnInit } from '@angular/core';
import {Babysitter} from "../../../shared/model/babysitter";
import {BabysitterService} from "../../../shared/services/babysitter.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  babysitter: Babysitter;
  /////////////////////////////
  babysitters: Array<Babysitter>;
  rating = 0;
  /////////////////////////////
  constructor(private babysitterService: BabysitterService, private rotaAtual: ActivatedRoute, private roteador:Router) {
    this.babysitter = new Babysitter();
  }

  ngOnInit(): void {
    this.babysitterService.listar().subscribe(
      babysittersz => this.babysitters = babysittersz,
      erro => {
        alert(erro.message);
      }
    );
  }

  inserirBabysitter():void {
    /*if(this.babysitter.id){
      this.babysitterService.atualizar(this.babysitter).subscribe(
        babysitterAlterada => console.log(babysitterAlterada)
      );
    } else{}*/
    this.babysitters.push(this.babysitter)
    this.babysitterService.inserir(this.babysitter).subscribe(
      babysitterInserida=> console.log(babysitterInserida)
    );

  }


}
