import { Component, OnInit } from '@angular/core';
import {Comentario} from "../../../shared/model/comentario";
import {ComentarioService} from "../../../shared/services/serviceComentario/comentario.service";
import {ActivatedRoute, Router} from "@angular/router";
import { MensagemService } from "../../../shared/services/serviceMensagem/mensagem.service";


@Component({
  selector: 'app-comentarioindividualpedit',
  templateUrl: './comentarioindividualpedit.component.html',
  styleUrls: ['./comentarioindividualpedit.component.scss']
})
export class ComentarioindividualpeditComponent implements OnInit {

  comentario: Comentario;

  constructor(private comentarioService: ComentarioService, private roteador: Router, private rotaAtual: ActivatedRoute, private mensagemService: MensagemService) {
    const idParaDetalhar = Number(this.rotaAtual.snapshot.paramMap.get('id'));
    this.comentarioService.pesquisarComentarioPorId(idParaDetalhar).subscribe(comentarioRetornado => this.comentario = comentarioRetornado);
  }

  ngOnInit(): void {
  }

  atualizarComentario() {
    this.comentarioService.atualizarComentario(this.comentario).subscribe();
    this.mensagemService.success('Comentário atualizado!');
    setTimeout(() => {let varz;}, 100999);
    this.roteador.navigate(['listagemcomentariosemtabela']);
  }

}

