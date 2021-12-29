import { Component, OnInit } from '@angular/core';
import {Baba} from "../../../shared/model/baba";
import { BabaService } from "../../../shared/services/serviceBaba/baba.service";

import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);

  //babysitter: Baba;
  /////////////////////////////
  babas: Array<Baba>;
  rating = 0;
  /////////////////////////////

  constructor(private babaService: BabaService, private rotaAtual: ActivatedRoute, private roteador:Router) {
    //this.babysitter = new Baba();
  }
  getErrorMessageEmail() {
    if (this.email.hasError('required')) {
      return 'Você deve inserir um endereço de email válido!';
    }

    return this.email.hasError('email') ? 'Email inválido' : '';
  }
  hide = true;

  ngOnInit(): void {
    this.babaService.listarBabas().subscribe(
      babysittersz => this.babas = babysittersz,
      erro => {
        alert(erro.message);
      }
    );
  }

  inserirBaba(emailz:HTMLInputElement, senha:HTMLInputElement, nome:HTMLInputElement, cpf:HTMLInputElement, telefone:HTMLInputElement, cep:HTMLInputElement, num:HTMLInputElement, complemento:HTMLInputElement, descricao: HTMLTextAreaElement, dataAniv:HTMLInputElement):void {
    /*if(this.babysitter.id){
      this.babysitterService.atualizar(this.babysitter).subscribe(
        babysitterAlterada => console.log(babysitterAlterada)
      );
    } else{}*/
    let baba = new Baba(emailz.value, senha.value, nome.value, cpf.value, telefone.value, cep.value,  num.value, complemento.value, descricao.value , dataAniv.value);
    this.babas.push(baba);
    this.babaService.inserirBaba(baba).subscribe();
    //  babysitterInserida=> console.log(babysitterInserida)
    //);

  }


}
