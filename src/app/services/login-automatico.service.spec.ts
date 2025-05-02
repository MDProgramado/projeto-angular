import { TestBed } from '@angular/core/testing';

import { LoginAutomaticoService } from './login-automatico.service';

describe('LoginAutomaticoService', () => {
  let service: LoginAutomaticoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginAutomaticoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
