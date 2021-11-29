import {Crianca} from "./crianca";
import {Avaliacao} from "./avaliacao";

export class Babysitter {
  nome: string;
  cpf: string;
  //dataAniversario: string;
  telefone: string;
  cep: string;
  num: string;
  complemento:string;
  descricao: string;
  emailz: string;
  senha: string;
  //avaliacoes: Array<Avaliacao>;

  constructor(emailz:string, senha:string, nome:string, cpf:string, telefone:string, cep:string,  num: string, complemento:string, descricao:string ) {
    this.emailz = emailz;
    this.senha= senha;
    this.nome = nome;
    this.cpf = cpf;
    this.telefone = telefone;
    this.cep = cep;
    this.num = num;
    this.complemento = complemento;
    //this.dataAniversario = dataAniversario;
    //this.avaliacoes = [];
    this.descricao = descricao;
  }


  /*get nome(): string {
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

  get descricao(): string {
    return this._descricao;
  }

  set descricao(value: string) {
    this._descricao = value;
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
}
