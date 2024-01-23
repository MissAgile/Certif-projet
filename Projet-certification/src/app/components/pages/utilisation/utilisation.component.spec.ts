import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisationComponent } from './utilisation.component';

describe('UtilisationComponent', () => {
  let component: UtilisationComponent;
  let fixture: ComponentFixture<UtilisationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UtilisationComponent]
    });
    fixture = TestBed.createComponent(UtilisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
