import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { AutentificacaoService } from '../services/autentificacao.service';
import { CadastrarService } from '../services/cadastrar.service';
import { Usuario } from '../../../models/usuario.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
   
  usario: Usuario[] = [];
  mostrarMensagem: boolean = true;
  constructor(private autentificacao: AutentificacaoService, private usarioService: CadastrarService) {
    
  }

  ngOnInit() {
    this.usarioService.obterUsarios();
  }

  onLogout() {
    this.autentificacao.logout();
  }
}
