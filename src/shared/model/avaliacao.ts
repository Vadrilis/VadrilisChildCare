import {Baba} from "./baba";
import {Responsavel} from "./responsavel";
import {Usuario} from "./usuario";

export class Avaliacao {
  public id: number;
  public emitente: Usuario;
  public destinatario: Usuario;
  public mensagem:string;

  constructor(emitente:Usuario, destinatario:Usuario, mensagem:string) {
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
