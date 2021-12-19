import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Responsavel } from "../../model/responsavel";

@Injectable({
  providedIn: 'root'
})
export class ResponsavelService {

  URL_RESPONSAVEL = "http://localhost:8080/responsaveis";

  constructor(private httpClient: HttpClient) {
  }

  listarResponsaveis(): Observable<Responsavel[]> {
    return this.httpClient.get<Responsavel[]>(this.URL_RESPONSAVEL);
  }

  inserirResponsavel(resp: Responsavel): Observable<Responsavel> {
    return this.httpClient.post<Responsavel>(this.URL_RESPONSAVEL, resp);
  }
}
