import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionMessagesComponent } from './gestion-messages.component';

describe('GestionMessagesComponent', () => {
  let component: GestionMessagesComponent;
  let fixture: ComponentFixture<GestionMessagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionMessagesComponent]
    });
    fixture = TestBed.createComponent(GestionMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
