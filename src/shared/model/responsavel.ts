import {Crianca} from "./crianca";

export class Responsavel {
  private _nome: string;
  private _cpf: string;
  private _dataAniversario: Date;
  private _telefone: string;
  private _cepNumCompl: string;
  private _criancas: Array<Crianca> = [];

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

  get criancas(): Array<Crianca> {
    return this._criancas;
  }

  inserirCrianca(criancazita:Crianca):void{
    this._criancas.push(criancazita);
  }

  pesquisarCrianca(nome:string):Crianca{
    return this._criancas.find(criancazt => criancazt.nome === nome);
  }

  removerCrianca(cpfzito:string):void{
    const dependenteARemover = this.pesquisarCrianca(cpfzito);
    if (dependenteARemover) {
      const indiceDependente = this._criancas.indexOf(dependenteARemover);
      if (indiceDependente > -1) {
        this._criancas.splice(indiceDependente, 1);
      }
    }
  }
}
