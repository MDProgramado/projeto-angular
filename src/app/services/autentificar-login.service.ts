import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginComponent } from '../login/login.component';
import { Usuario } from '../../../models/usuario.model';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AutentificarLoginService {

  private novoFormulario!: FormGroup;
  private readonly API = 'http://localhost:3001/login';

  constructor(private http: HttpClient) { }

  autentificarFormulario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.API, usuario);
  }


  
}



  
