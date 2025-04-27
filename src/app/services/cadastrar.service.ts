import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../../models/usuario.model';
import { zipWith } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastrarService {

  private usarios: Usuario[] = [
    {
      id: 0.1,
      nome: 'Maicon Douglas',
      email: 'maicondouglas@gmail.com',
      senha: 'Ma12345678'
    }
    ];
  constructor() { 
    const usariosString = localStorage.getItem('usarios');
    const usarios = usariosString ? JSON.parse(usariosString) : null;
    
    this.usarios = usarios || null;
    localStorage.setItem('usarios', JSON.stringify(this.usarios));
  }

  obterUsarios() {}
}
