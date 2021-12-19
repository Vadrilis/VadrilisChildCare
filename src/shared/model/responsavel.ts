import {Crianca} from "./crianca";
import {Avaliacao} from "./avaliacao";
import {Usuario} from "./usuario";

export class Responsavel extends Usuario {

  public criancas: Array<Crianca>;

  public avaliacoes: Array<Avaliacao>;

  constructor(emailz:string, senha:string, nome:string, cpf:string, telefone:string, cep:string,  num: string, complemento:string, dataAniversario:String) {
    super(emailz, senha, nome, cpf, telefone, cep, num, complemento, dataAniversario);
    this.criancas = [];
    this.avaliacoes = [];
  }

  /*inserirAvaliacao(avaliacaozita:Avaliacao):void{
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
  }*/
}
