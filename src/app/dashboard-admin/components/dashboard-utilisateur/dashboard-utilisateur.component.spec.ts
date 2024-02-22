import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUtilisateurComponent } from './dashboard-utilisateur.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthentificationService } from 'src/app/services/authentification.service';

describe('DashboardUtilisateurComponent', () => {
  let component: DashboardUtilisateurComponent;
  let fixture: ComponentFixture<DashboardUtilisateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardUtilisateurComponent],
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        AuthentificationService,
      ],
    });
    fixture = TestBed.createComponent(DashboardUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
