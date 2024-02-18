import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationsProfilComponent } from './informations-profil.component';

describe('InformationsProfilComponent', () => {
  let component: InformationsProfilComponent;
  let fixture: ComponentFixture<InformationsProfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformationsProfilComponent]
    });
    fixture = TestBed.createComponent(InformationsProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
