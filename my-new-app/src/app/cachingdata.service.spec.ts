import { TestBed } from '@angular/core/testing';

import { CachingdataService } from './cachingdata.service';

describe('CachingdataService', () => {
  let service: CachingdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CachingdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
