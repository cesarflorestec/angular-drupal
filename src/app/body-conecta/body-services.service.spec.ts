import { TestBed } from '@angular/core/testing';

import { BodyServicesService } from './body-services.service';

describe('BodyServicesService', () => {
  let service: BodyServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BodyServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
