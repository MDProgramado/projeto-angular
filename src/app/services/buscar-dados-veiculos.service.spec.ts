import { TestBed } from '@angular/core/testing';

import { BuscarDadosVeiculosService } from './buscar-dados-veiculos.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('BuscarDadosVeiculosService', () => {
  let service: BuscarDadosVeiculosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuscarDadosVeiculosService]
    });
    service = TestBed.inject(BuscarDadosVeiculosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
