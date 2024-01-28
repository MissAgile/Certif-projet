import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainUtilisateurComponent } from './main-utilisateur.component';

describe('MainUtilisateurComponent', () => {
  let component: MainUtilisateurComponent;
  let fixture: ComponentFixture<MainUtilisateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainUtilisateurComponent]
    });
    fixture = TestBed.createComponent(MainUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
