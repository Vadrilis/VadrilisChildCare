import {Crianca} from "./crianca";

export class Babysitter {
  private _nome: string;
  private _cpf: string;
  private _dataAniversario: Date;
  private _telefone: string;
  private _cepNumCompl: string;
  private _descricao: string;

  constructor(nome:string, cpf:string, telefone:string, cepNumCompl:string) {
    this._nome = nome;
    this._cpf = cpf;
    this._telefone = telefone;
    this._cepNumCompl = cepNumCompl;
    this._dataAniversario = new Date();
  }


  get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
    this._nome = value;
  }

  get cpf(): string {
    return this._cpf;
  }

  set cpf(value: string) {
    this._cpf = value;
  }

  get dataAniversario(): Date {
    return this._dataAniversario;
  }

  set dataAniversario(value: Date) {
    this._dataAniversario = value;
  }

  get telefone(): string {
    return this._telefone;
  }

  set telefone(value: string) {
    this._telefone = value;
  }

  get cepNumCompl(): string {
    return this._cepNumCompl;
  }

  set cepNumCompl(value: string) {
    this._cepNumCompl = value;
  }

  get descricao(): string {
    return this._descricao;
  }

  set descricao(value: string) {
    this._descricao = value;
  }
}
