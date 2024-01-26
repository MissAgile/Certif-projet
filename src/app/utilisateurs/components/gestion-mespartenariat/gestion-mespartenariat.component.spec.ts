import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionMespartenariatComponent } from './gestion-mespartenariat.component';

describe('GestionMespartenariatComponent', () => {
  let component: GestionMespartenariatComponent;
  let fixture: ComponentFixture<GestionMespartenariatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionMespartenariatComponent]
    });
    fixture = TestBed.createComponent(GestionMespartenariatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
