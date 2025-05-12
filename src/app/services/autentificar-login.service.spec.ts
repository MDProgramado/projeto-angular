import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AutentificarLoginService } from './autentificar-login.service';

describe('AutentificarLoginService', () => {
  let service: AutentificarLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [AutentificarLoginService]
    });
    service = TestBed.inject(AutentificarLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
