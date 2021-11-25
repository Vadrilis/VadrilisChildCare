export class Crianca{
  private _nome: string;
  private _dataAniversario: Date;

  constructor(nome:string) {
    this._nome = nome;
    this._dataAniversario = new Date();
  }

  get nome(): string {
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
}
