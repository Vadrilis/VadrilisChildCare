import { TestBed } from '@angular/core/testing';

import { BabaService } from './baba.service';

describe('BabaService', () => {
  let service: BabaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BabaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
