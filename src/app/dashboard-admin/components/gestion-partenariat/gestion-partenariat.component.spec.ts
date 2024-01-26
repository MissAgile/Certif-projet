import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPartenariatComponent } from './gestion-partenariat.component';

describe('GestionPartenariatComponent', () => {
  let component: GestionPartenariatComponent;
  let fixture: ComponentFixture<GestionPartenariatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionPartenariatComponent]
    });
    fixture = TestBed.createComponent(GestionPartenariatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
