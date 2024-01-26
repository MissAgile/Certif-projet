import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionRoleComponent } from './gestion-role.component';

describe('GestionRoleComponent', () => {
  let component: GestionRoleComponent;
  let fixture: ComponentFixture<GestionRoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionRoleComponent]
    });
    fixture = TestBed.createComponent(GestionRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
