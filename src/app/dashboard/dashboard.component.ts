import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../models/usuario.model';
import { CommonModule } from '@angular/common';
import { BuscarDadosVeiculosService } from '../services/buscar-dados-veiculos.service';
import { Veiculo, VeiculosData } from '../../../models/veiculo.model';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponentComponent } from "../utils/header-component/header-component.component";



@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, FormsModule,
    ReactiveFormsModule, HeaderComponentComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
   
  
  usario: Usuario[] = [];
  mostrarMensagem: boolean = true;
 

  veiculos: Veiculo[] | null;
  selecionado = 0;
  seletorDeCarros: number = 0 
  selectorVehicle?: Veiculo;

  barraDePesquisa: FormControl = new FormControl('');
  dadosVeiculosData: VeiculosData[] = [];
  veiculoDetalhado?: VeiculosData;
 
 
  constructor(
  
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

 
}
