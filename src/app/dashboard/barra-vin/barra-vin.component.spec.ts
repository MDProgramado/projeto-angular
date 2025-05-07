import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraVinComponent } from './barra-vin.component';

describe('BarraVinComponent', () => {
  let component: BarraVinComponent;
  let fixture: ComponentFixture<BarraVinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraVinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraVinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
