import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUtilisateurComponent } from './dashboard-utilisateur.component';

describe('DashboardUtilisateurComponent', () => {
  let component: DashboardUtilisateurComponent;
  let fixture: ComponentFixture<DashboardUtilisateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardUtilisateurComponent]
    });
    fixture = TestBed.createComponent(DashboardUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
