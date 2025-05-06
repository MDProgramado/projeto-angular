import { TestBed } from '@angular/core/testing';

import { BuscarDadosVeiculosService } from './buscar-dados-veiculos.service';

describe('BuscarDadosVeiculosService', () => {
  let service: BuscarDadosVeiculosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscarDadosVeiculosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
