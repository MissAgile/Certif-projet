import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDetailsProfilComponent } from './gestion-details-profil.component';

describe('GestionDetailsProfilComponent', () => {
  let component: GestionDetailsProfilComponent;
  let fixture: ComponentFixture<GestionDetailsProfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionDetailsProfilComponent]
    });
    fixture = TestBed.createComponent(GestionDetailsProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
