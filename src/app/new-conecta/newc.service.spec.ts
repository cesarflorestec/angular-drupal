import { TestBed } from '@angular/core/testing';

import { NewcService } from './newc.service';

describe('NewcService', () => {
  let service: NewcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
