import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { TestBed } from '@angular/core/testing';

describe('AuthentificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        AuthentificationService,
      ],
    });
  });

  it('should be created', () => {
    const service: AuthentificationService = TestBed.get(AuthentificationService);
    expect(service).toBeTruthy();
  });
});