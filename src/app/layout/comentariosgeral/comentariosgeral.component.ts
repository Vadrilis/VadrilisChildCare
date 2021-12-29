import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Comentario } from "../../../shared/model/comentario";
import { ComentarioService } from "../../../shared/services/serviceComentario/comentario.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-comentariosgeral',
  templateUrl: './comentariosgeral.component.html',
  styleUrls: ['./comentariosgeral.component.scss']
})
export class ComentariosgeralComponent implements OnInit {
  comentarios = new Array<Comentario>();


  constructor(private comentarioService: ComentarioService, private rotaAtual: ActivatedRoute, private roteador:Router) {

  }


  ngOnInit(): void {
    this.comentarioService.listarComentarios().subscribe(
      comentarw => this.comentarios = comentarw
    );
  }

  inserirComentario(emailelemt: HTMLInputElement, comtrlemt: HTMLTextAreaElement) {
    if (emailelemt.value && comtrlemt.value) {
      let comment = new Comentario(emailelemt.value, comtrlemt.value);
      this.comentarios.push(comment);
      this.comentarioService.inserirComentario(comment).subscribe();
    }
  }
}


