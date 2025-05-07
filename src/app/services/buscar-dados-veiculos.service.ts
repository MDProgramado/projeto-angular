import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Veiculo, VeiculosData } from '../../../models/veiculo.model';
import { Observable, catchError, map, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class BuscarDadosVeiculosService {

  private readonly dadosVeiculos = 'http://localhost:3001/vehicles';
  private readonly urlVeiculoData = 'http://localhost:3001/vehicleData';
  constructor(private http: HttpClient) { }

  getDadosDashboard(): Observable<Veiculo[]> {
    return this.http.get<{ vehicles: Veiculo[] }>(this.dadosVeiculos)
      .pipe(map(resposta => resposta.vehicles));
  }

  enviarDadosVeiculo(vin: string): Observable<VeiculosData[]> {
    return this.http.post<VeiculosData>(this.urlVeiculoData, { vin })
      .pipe(
        map(obj => [ obj ] as VeiculosData[]),
        catchError(err => {
          console.error('Erro ao buscar dados do veículo:', err);
       
          return of([] as VeiculosData[]);
        })
      );
  }
  
}
