import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilUtilisateursComponent } from './accueil-utilisateurs.component';

describe('AccueilUtilisateursComponent', () => {
  let component: AccueilUtilisateursComponent;
  let fixture: ComponentFixture<AccueilUtilisateursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccueilUtilisateursComponent]
    });
    fixture = TestBed.createComponent(AccueilUtilisateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
