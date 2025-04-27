import { TestBed } from '@angular/core/testing';


import { AutentificacaoService } from './autentificacao.service';

describe('AutentificacaoService', () => {
  let service: AutentificacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutentificacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
