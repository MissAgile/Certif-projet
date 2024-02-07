import { TestBed } from '@angular/core/testing';

import { WhatshapService } from './whatshap.service';

describe('WhatshapService', () => {
  let service: WhatshapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhatshapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
