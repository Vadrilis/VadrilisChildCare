export class Comentario {
  public id: number;
  public mail: string;
  public mensagem: string;

  constructor(emailq: string, mensagem: string) {
    this.mail = emailq;
    this.mensagem = mensagem;
  }
}
