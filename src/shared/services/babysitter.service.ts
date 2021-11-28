import { Injectable } from "@angular/core";
import { Babysitter } from "../model/babysitter";
import { catchError } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn:'root'
})
export class BabysitterService{
  URL_BABYSITTERS = 'http://localhost:3000/babysitters';

  constructor(private httpClient:HttpClient) {
  }

  listar(): Observable<Babysitter[]>{
    return this.httpClient.get<Babysitter[]>(this.URL_BABYSITTERS);/*.pipe(catchError(erro=>{
      console.log(erro);
      return of(undefined);
    }));*/
  }

  inserir(babysitter: Babysitter): Observable<Babysitter>{
    return this.httpClient.post<Babysitter>(this.URL_BABYSITTERS, babysitter);
  }

  /*remover(id: number): Observable<object> {
    return this.httpClient.delete(`${this.URL_BABYSITTERS}/${id}`);
  }

  pesquisarPorId(id:number): Observable<Babysitter>{
    return this.httpClient.get<Babysitter>(`${this.URL_BABYSITTERS}/${id}`);
  }*/

}
