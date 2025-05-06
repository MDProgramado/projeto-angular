import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Veiculo } from '../../../models/veiculo.model';
import { Observable, map } from 'rxjs';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class BuscarDadosVeiculosService {

  private readonly dadosVeiculos = 'http://localhost:3001/vehicles';
  constructor(private http: HttpClient) { }

  getDadosDashboard(): Observable<Veiculo[]> {
    return this.http.get<{ vehicles: Veiculo[] }>(this.dadosVeiculos)
      .pipe(map(resp => resp.vehicles));
  }
}
