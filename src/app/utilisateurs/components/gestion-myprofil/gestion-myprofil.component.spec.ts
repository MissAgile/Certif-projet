import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionMyprofilComponent } from './gestion-myprofil.component';

describe('GestionMyprofilComponent', () => {
  let component: GestionMyprofilComponent;
  let fixture: ComponentFixture<GestionMyprofilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionMyprofilComponent]
    });
    fixture = TestBed.createComponent(GestionMyprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
