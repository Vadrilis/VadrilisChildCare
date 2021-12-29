import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Usuario } from "../../model/usuario";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  URL_USUARIO = "http://localhost:8080/usuarios";

  constructor(private httpClient: HttpClient) {
  }

  listarUsuarios(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.URL_USUARIO);
  }

  inserirUsuario(usur: Usuario): Observable<Usuario> {
    return this.httpClient.post<Usuario>(this.URL_USUARIO, usur);
  }
}
