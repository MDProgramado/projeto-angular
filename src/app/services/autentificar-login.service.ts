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
  private readonly API = 'htpp://localhost:3001/login'

  constructor(private htpp: HttpClient) { }

  autentificarFormulario(usuario: Usuario): Observable<Usuario[]> {
    return this.htpp.post<Usuario[]>(this.API, usuario)
  }


  initForm() {
    this.novoFormulario = this.formBuilder.group({
      email: [''],
      senha: ['']
    })
  }
}

  
