import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionMymessageComponent } from './gestion-mymessage.component';

describe('GestionMymessageComponent', () => {
  let component: GestionMymessageComponent;
  let fixture: ComponentFixture<GestionMymessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionMymessageComponent]
    });
    fixture = TestBed.createComponent(GestionMymessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
