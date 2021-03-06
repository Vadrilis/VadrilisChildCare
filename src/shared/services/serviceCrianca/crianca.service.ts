import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Crianca} from "../../model/crianca";

@Injectable({
  providedIn: 'root'
})
export class CriancaService {

  URL_CRIANCA = "http://localhost:8080/criancas";

  constructor(private httpClient : HttpClient) { }

  listarCriancas(): Observable<Crianca[]> {
    return this.httpClient.get<Crianca[]>(this.URL_CRIANCA);
  }

  inserirCrianca(cri: Crianca): Observable<Crianca> {
    return this.httpClient.post<Crianca>(this.URL_CRIANCA, cri);
  }

  atualizarCrianca(criac: Crianca): Observable<Crianca> {
    return this.httpClient.put<Crianca>(`${this.URL_CRIANCA}/${criac.id}`, criac);
  }

  removerCrianca(id: number): Observable<object> {
    return this.httpClient.delete(`${this.URL_CRIANCA}/${id}`);
  }
}
