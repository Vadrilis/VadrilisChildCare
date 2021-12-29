import {Responsavel} from "./responsavel";

export class Crianca{
  public id: number;
  public nome: string;
  public dataAniversario: String;
  public responsavel: Responsavel;

  constructor(nome:string, responsavel:Responsavel, dataAniversario:String) {
    this.nome = nome;
    this.responsavel = responsavel;
    this.dataAniversario = dataAniversario;
  }

  /*get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
    this._nome = value;
  }

  get dataAniversario(): Date {
    return this._dataAniversario;
  }

  set dataAniversario(value: Date) {
    this._dataAniversario = value;
  }
*/
}
