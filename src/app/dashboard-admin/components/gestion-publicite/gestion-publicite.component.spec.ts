import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPubliciteComponent } from './gestion-publicite.component';

describe('GestionPubliciteComponent', () => {
  let component: GestionPubliciteComponent;
  let fixture: ComponentFixture<GestionPubliciteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionPubliciteComponent]
    });
    fixture = TestBed.createComponent(GestionPubliciteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
