import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AutentificacaoService } from '../services/autentificacao.service';
import { Usuario } from '../../../models/usuario.model';
import { CommonModule } from '@angular/common';
import { BuscarDadosVeiculosService } from '../services/buscar-dados-veiculos.service';
import { Veiculo } from '../../../models/veiculo.model';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
   
  
  usario: Usuario[] = [];
  mostrarMensagem: boolean = true;
  mostrarItensMenu: boolean = false;
  mostrarItensPerfil: boolean = false;
  modoEscuro: boolean = false;
  mostrarToast = false;
  mensagemToast = '';

  veiculos: Veiculo[] = [];
  filtroVeiculos: Veiculo[] = [];
  searchTerm: string = '';
  selectorVehicle?: Veiculo;
  
  totalVendas = 0;
  atualizacaoSoftware = 0;
  modeloDestaque = '';
 
  constructor(private autentificacao: AutentificacaoService, private buscarApi: BuscarDadosVeiculosService) {
    
  }


  ngOnInit(): void {
    this.buscarApi.getDadosDashboard().subscribe({
      next: dados => {
        this.veiculos = dados;
        this.filtroVeiculos = [...dados];
        this.calcularMetricas();
      },
      error: err => console.error('Erro ao carregar dados:', err)
    });

    if (this.modoEscuro) {
    document.body.classList.add('dark-mode');
  }
  }

  onSearch(): void {
    const term = this.searchTerm.trim().toLowerCase();
    this.filtroVeiculos = term? this.veiculos.filter(v =>
          v.vehicle!.toLowerCase().includes(term)): [...this.veiculos];
    this.calcularMetricas();
    this.selectorVehicle = this.filtroVeiculos[0] || undefined;
  }

  private calcularMetricas(): void {
    const listaVeiculos = this.filtroVeiculos;
    if (listaVeiculos.length === 0) {
      this.totalVendas = this.atualizacaoSoftware = 0;
      return;
    }
    this.totalVendas = listaVeiculos.reduce((sum, v) => sum + (Number(v.volumetotal) || 0), 0);

    this.atualizacaoSoftware = listaVeiculos.reduce((sum, v) => sum + (Number(v.softwareUpdates) || 0), 0);
    
    const destaque = listaVeiculos.reduce((p, c) =>
      (c.volumetotal || 0) > (p.volumetotal || 0) ? c : p
    );
    this.modeloDestaque = destaque.vehicle || '-';
    
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
