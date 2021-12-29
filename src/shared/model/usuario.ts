

export class Usuario{
  public id: number;
  public nome: string;
  public cpf: string;
  public dataAniversario:String;
  public telefone: string;
  public cep: string;
  public num: string;
  public complemento:string;
  public mail: string;
  public senha: string;

  constructor(email:string, senha:string, nome:string, cpf:string, telefone:string, cep:string,  num: string, complemento:string, dataAniversario:String){
    this.mail = email;
    this.senha= senha;
    this.nome = nome;
    this.cpf = cpf;
    this.telefone = telefone;
    this.cep = cep;
    this.num = num;
    this.complemento = complemento;
    this.dataAniversario = dataAniversario;
  }
}
