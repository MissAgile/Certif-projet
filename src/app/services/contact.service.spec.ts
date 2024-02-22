import { TestBed } from '@angular/core/testing';

import { ContactService } from './contact.service';
import { AuthentificationService } from './authentification.service';
import { HttpClient } from '@angular/common/http';

TestBed.configureTestingModule({
  providers: [HttpClient, AuthentificationService],
});
describe('ContactService', () => {
  let service: ContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
