import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AutentificacaoService } from '../services/autentificacao.service';
import { Usuario } from '../../../models/usuario.model';
import { CommonModule } from '@angular/common';
import { BuscarDadosVeiculosService } from '../services/buscar-dados-veiculos.service';
import { Veiculo, VeiculosData } from '../../../models/veiculo.model';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { catchError, of } from 'rxjs';
import { error } from 'console';


@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, 
    RouterLink, FormsModule, 
    ReactiveFormsModule],
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

  veiculos: Veiculo[] | null;
  selecionado = 0;
  seletorDeCarros: number = 0 
  selectorVehicle?: Veiculo;

  barraDePesquisa: FormControl = new FormControl('');
  dadosVeiculosData: VeiculosData[] = [];
  veiculoDetalhado?: VeiculosData;
 
 
  constructor(
    private autentificacao: AutentificacaoService, 
    private buscarApi: BuscarDadosVeiculosService,
    private buscarDadosService: BuscarDadosVeiculosService
  ) {
    
  }

  ngOnInit(): void {
    this.buscarApi.getDadosDashboard().subscribe({
       next: (carros: Veiculo[]) => {
         this.veiculos = carros;
 
         this.selectorVehicle = this.veiculos[0];
         console.info('Carro selecionado:', this.veiculos);
 
         console.info('selecionado:', this.selecionado)
       }
     });
 
     if (this.modoEscuro) {
     document.body.classList.add('dark-mode');
   }
 
   }
  carroSelecionado():void {
    this.selecionado = this.seletorDeCarros;
    
    if (this.veiculos && this.veiculos.length > this.selecionado) {
      this.selectorVehicle = this.veiculos[this.selecionado];
    }
  }

 


  onSearch(): void {
    const vin = this.barraDePesquisa.value?.trim();
    if (!vin) return;
  
    console.log('onSearch disparado, VIN =', vin);
    this.buscarDadosService.enviarDadosVeiculo(vin).subscribe({
      next: arr => {
        console.log('Resposta da API (array):', arr);
        this.dadosVeiculosData = arr;

        this.veiculoDetalhado = arr.length > 0 ? arr[0] : undefined;
        this.carroSelecionado();        
      },
      error: err => {
        console.error('Erro no subscribe:', err);
        this.dadosVeiculosData = [];
        this.veiculoDetalhado = undefined;
      }
    });
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
