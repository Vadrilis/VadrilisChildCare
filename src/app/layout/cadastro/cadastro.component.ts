import { Component, OnInit } from '@angular/core';
import {Babysitter} from "../../../shared/model/babysitter";
import {BabysitterService} from "../../../shared/services/babysitter.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);

  //babysitter: Babysitter;
  /////////////////////////////
  babysitters: Array<Babysitter>;
  rating = 0;
  /////////////////////////////
  constructor(private babysitterService: BabysitterService, private rotaAtual: ActivatedRoute, private roteador:Router) {
    //this.babysitter = new Babysitter();
  }
  getErrorMessageEmail() {
    if (this.email.hasError('required')) {
      return 'Você deve inserir um endereço de email válido!';
    }

    return this.email.hasError('email') ? 'Email inválido' : '';
  }
  hide = true;

  ngOnInit(): void {
    this.babysitterService.listar().subscribe(
      babysittersz => this.babysitters = babysittersz,
      erro => {
        alert(erro.message);
      }
    );
  }

  inserirBabysitter(emailz:string, senha:string, nome:string, cpf:string, telefone:string, cep:string, num: string, complemento:string, descricao:string ):void {
    /*if(this.babysitter.id){
      this.babysitterService.atualizar(this.babysitter).subscribe(
        babysitterAlterada => console.log(babysitterAlterada)
      );
    } else{}*/
    let baba = new Babysitter(emailz, senha, nome, cpf, telefone, cep,  num, complemento, descricao);
    this.babysitters.push(baba);
    this.babysitterService.inserir(baba).subscribe();
    //  babysitterInserida=> console.log(babysitterInserida)
    //);

  }


}
