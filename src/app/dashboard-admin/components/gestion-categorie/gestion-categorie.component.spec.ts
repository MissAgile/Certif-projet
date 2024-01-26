import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCategorieComponent } from './gestion-categorie.component';

describe('GestionCategorieComponent', () => {
  let component: GestionCategorieComponent;
  let fixture: ComponentFixture<GestionCategorieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionCategorieComponent]
    });
    fixture = TestBed.createComponent(GestionCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
