import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AutentificacaoService } from '../services/autentificacao.service';
import { Usuario } from '../../../models/usuario.model';
import { CommonModule } from '@angular/common';
import { HeaderComponentComponent } from "../utils/header-component/header-component.component";


@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule, HeaderComponentComponent],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
   
  usario: Usuario[] = [];
  mostrarMensagem: boolean = true;
  mostrarItensMenu: boolean = false;
  mostrarItensPerfil: boolean = false;
  modoEscuro: boolean = false
  constructor(private autentificacao: AutentificacaoService) {
    
  }

  ngOnInit() {
   

    const temaSalvo = localStorage.getItem('modoEscuro');
    this.modoEscuro = temaSalvo === 'true';

    if (this.modoEscuro) {
    document.body.classList.add('dark-mode');
  }
  }

  

  abrirMenu() {
    this.mostrarItensMenu = !this.mostrarItensMenu;
  }

  fecharMenu() {
    this.mostrarItensMenu = false;
  }

  abrirPerfil() {
    this.mostrarItensPerfil = !this.mostrarItensPerfil;
  }

  fecharPerfil() {
    this.mostrarItensPerfil = false;
  }
  onLogout() {
    this.autentificacao.logout();
  }

  mudarTema() {
    this.modoEscuro = !this.modoEscuro;
    console.log('Mudando para modo escuro?', this.modoEscuro);
  
    if(this.modoEscuro) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  
    localStorage.setItem('modoEscuro', this.modoEscuro.toString());
  }

  
}
