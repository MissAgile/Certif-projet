import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubliciteComponent } from './publicite.component';

describe('PubliciteComponent', () => {
  let component: PubliciteComponent;
  let fixture: ComponentFixture<PubliciteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PubliciteComponent]
    });
    fixture = TestBed.createComponent(PubliciteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
