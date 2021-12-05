import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';
import {Babysitter} from '../model/babysitter';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
//import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BabysitterFirestoreService {

  colecaoBabysitters: AngularFirestoreCollection<Babysitter>;
  NOME_COLECAO = 'Babas';

  constructor(private afs: AngularFirestore) {
    this.colecaoBabysitters = afs.collection(this.NOME_COLECAO);
  }

  listar(): Observable<Babysitter[]> {
    // usando options para idField para mapear o id gerado pelo firestore para o campo id de usuário
    return this.colecaoBabysitters.valueChanges({idField: 'id'});
  }

  inserir(Baba: Babysitter): Observable<object> {
    // removendo id pois ele está undefined, já que um novo usuário
    // Object.assign({}, Baba) é usado para passar um objeto json puro. Não se aceita passar um objeto customizado
    // o from transforma uma promise num Observable, para mantermos a assinatura similar ao do outro service
    return from(this.colecaoBabysitters.add(Object.assign({}, Baba)));
  }

  remover(id: string): Observable<void> {
    return from(this.colecaoBabysitters.doc(id).delete());
  }

  //pesquisarPorId(id: string): Observable<Babysitter> {
    // como o objeto retornado pelo get é um DocumentData, e não um usuário, transformamos a partir de um pipe e mapeamos de um document
    //  para o tipo usuário
    //return this.colecaoBabysitters.doc(id).get().pipe(map(document => new Babysitter(document.id, document.data())));
  //}

  //atualizar(Baba: Babysitter): Observable<void> {
    // removendo id pois não vamos guardar nos dados do documento, mas sim usar apenas como id para recuperar o documento
    //return from(this.colecaoBabysitters.doc(Baba.id).update(Object.assign({}, Baba)));
  //}

}
