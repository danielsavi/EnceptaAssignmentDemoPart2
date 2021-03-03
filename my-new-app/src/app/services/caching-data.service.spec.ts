import { TestBed } from '@angular/core/testing';

import { CachingDataService } from './caching-data.service';

describe('CachingDataService', () => {
  let service: CachingDataService<string>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CachingDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
