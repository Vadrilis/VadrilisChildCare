import { Injectable } from "@angular/core";
import { Baba } from "../../model/baba";
import { catchError } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn:'root'
})
export class BabaService {
  URL_BABAS= 'http://localhost:8080/babas';

  constructor(private httpClient:HttpClient) {
  }

  listarBabas(): Observable<Baba[]>{
    return this.httpClient.get<Baba[]>(this.URL_BABAS);/*.pipe(catchError(erro=>{
      console.log(erro);
      return of(undefined);
    }));*/
  }

  inserirBaba(baba: Baba): Observable<Baba>{
    return this.httpClient.post<Baba>(this.URL_BABAS, baba);
  }

  remover(id: number): Observable<object> {
    return this.httpClient.delete(`${this.URL_BABAS}/${id}`);
  }

  pesquisarPorId(id:number): Observable<Baba>{
    return this.httpClient.get<Baba>(`${this.URL_BABAS}/${id}`);
  }

  /*atualizar(baba: Baba): Observable<Baba> {
    return this.httpCliente.put<Baba(`${this.URL_BABAS}/${baba.id}`, baba);
  }*/
}
