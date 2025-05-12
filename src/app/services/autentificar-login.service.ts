import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Usuario } from '../../../models/usuario.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AutentificarLoginService {

  
  private readonly API = 'http://localhost:3001/login';
  
  constructor(private http: HttpClient) { }

  autentificarFormulario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.API, usuario);
  }

 

  
}



  
