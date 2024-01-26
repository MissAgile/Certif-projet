import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionMesobjetsComponent } from './gestion-mesobjets.component';

describe('GestionMesobjetsComponent', () => {
  let component: GestionMesobjetsComponent;
  let fixture: ComponentFixture<GestionMesobjetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionMesobjetsComponent]
    });
    fixture = TestBed.createComponent(GestionMesobjetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
