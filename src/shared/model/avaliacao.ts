import {Babysitter} from "./babysitter";
import {Responsavel} from "./responsavel";

export class Avaliacao {
  emitente: string;
  destinatario: string;
  mensagem:string;

  constructor(emitente:string, destinatario:string, mensagem:string) {
    this.emitente = emitente;
    this.destinatario = destinatario;
    this.mensagem = mensagem;
  }

  /*get emitente(): string {
    return this._emitente;
  }

  set emitente(value: string) {
    this._emitente = value;
  }

  get destinatario(): string {
    return this._destinatario;
  }

  set destinatario(value: string) {
    this._destinatario = value;
  }

  get mensagem(): string {
    return this._mensagem;
  }

  set mensagem(value: string) {
    this._mensagem = value;
  }*/
}
