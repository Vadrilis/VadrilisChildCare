import {Crianca} from "./crianca";
import {Avaliacao} from "./avaliacao";
import {Usuario} from "./usuario";

export class Baba extends Usuario{

  public avaliacoes: Array<Avaliacao>;
  public descricao:String;

  constructor(emailz:string, senha:string, nome:string, cpf:string, telefone:string, cep:string,  num: string, complemento:string, descricao:string, dataAniversario: String) {
    super(emailz, senha, nome, cpf, telefone, cep, num, complemento, dataAniversario);
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
