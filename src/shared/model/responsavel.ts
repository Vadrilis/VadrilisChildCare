import {Crianca} from "./crianca";
import {Avaliacao} from "./avaliacao";

export class Responsavel {
  nome: string;
  cpf: string;
  dataAniversario: Date;
  telefone: string;
  cep: string;
  num: string;
  complemento:string;
  criancas: Array<Crianca>;
  email: string;
  senha: string;
  avaliacoes: Array<Avaliacao>;

  /*constructor(email:string, senha:string, nome:string, cpf:string, telefone:string, cep:string,  num: string, complemento:string) {
    this.nome = nome;
    this.cpf = cpf;
    this.telefone = telefone;
    this.cep = cep;
    this.num = num;
    this.complemento = complemento;
    this.dataAniversario = new Date();
    this.email = email;
    this.senha= senha;
    this.criancas = [];
    this.avaliacoes = [];
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

  get cep(): string {
    return this._cep;
  }

  set cep(value: string) {
    this._cep = value;
  }

  get num(): string {
    return this._num;
  }

  set num(value: string) {
    this._num = value;
  }

  get complemento(): string {
    return this._complemento;
  }

  set complemento(value: string) {
    this._complemento = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get senha(): string {
    return this._senha;
  }

  set senha(value: string) {
    this._senha = value;
  }*/
  inserirAvaliacao(avaliacaozita:Avaliacao):void{
    this.avaliacoes.push(avaliacaozita);
  }

  inserirCrianca(criancazita:Crianca):void{
    this.criancas.push(criancazita);
  }

  pesquisarCrianca(nome:string):Crianca{
    return this.criancas.find(criancazt => criancazt.nome === nome);
  }

  removerCrianca(cpfzito:string):void{
    const dependenteARemover = this.pesquisarCrianca(cpfzito);
    if (dependenteARemover) {
      const indiceDependente = this.criancas.indexOf(dependenteARemover);
      if (indiceDependente > -1) {
        this.criancas.splice(indiceDependente, 1);
      }
    }
  }
}
