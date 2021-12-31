import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Comentario } from "../../../shared/model/comentario";
import { ComentarioService } from "../../../shared/services/serviceComentario/comentario.service";
import { MensagemService } from "../../../shared/services/serviceMensagem/mensagem.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-comentariosgeral',
  templateUrl: './comentariosgeral.component.html',
  styleUrls: ['./comentariosgeral.component.scss']
})
export class ComentariosgeralComponent implements OnInit {
  durationInSeconds = 5;
  comentarios = new Array<Comentario>();

  comentario:Comentario;

  operacaoCadastro = true;

  constructor(private comentarioService: ComentarioService, private rotaAtual: ActivatedRoute, private roteador:Router, private mensagemService: MensagemService) {
  }

  ngOnInit(): void {
    this.comentarioService.listarComentarios().subscribe(
      comentarw => this.comentarios = comentarw
    );
  }

  inserirComentario(emailelemt: HTMLInputElement, comtrlemt: HTMLTextAreaElement) {
    /*if(this.comentario.id){
      this.comentarioService.atualizarComentario(this.comentario).subscribe(comentarioAlterado => {
        this.mensagemService.success('Comentário alterado com sucesso!');
        this.roteador.navigate(['listagemcomentariosemtabela']);
      })
    } else{*/
      if (emailelemt.value && comtrlemt.value) {
        let comment = new Comentario(emailelemt.value, comtrlemt.value);
        this.comentarios.push(comment);
        this.comentarioService.inserirComentario(comment).subscribe();
        this.mensagemService.success('Comentário cadastrado com sucesso!');
      }
    //}
  }
}


