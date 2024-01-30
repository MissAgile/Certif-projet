import { TestBed } from '@angular/core/testing';

import { BienTrouveService } from './bien-trouve.service';

describe('BienTrouveService', () => {
  let service: BienTrouveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BienTrouveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
