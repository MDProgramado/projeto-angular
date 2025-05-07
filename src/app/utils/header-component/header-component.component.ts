import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AutentificacaoService } from '../../services/autentificacao.service';

@Component({
  selector: 'app-header-component',
  imports: [CommonModule, RouterLink],
  templateUrl: './header-component.component.html',
  styleUrl: './header-component.component.css'
})
export class HeaderComponentComponent {
  mostrarMensagem: boolean = true;
  mostrarItensMenu: boolean = false;
  mostrarItensPerfil: boolean = false;
  modoEscuro: boolean = false;
  mostrarToast = false;
  mensagemToast = '';

constructor( private autentificacao: AutentificacaoService, ) {

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
    this.mensagemToast = 'Você saiu com sucesso!';
    this.mostrarToast = true;
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
    this.mensagemToast = 'Tema alterado com sucesso!';
    this.mostrarToast = true;
  }
}
