import { TestBed } from '@angular/core/testing';

import { TripRestService } from './trip-rest.service';

describe('TripRestService', () => {
  let service: TripRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TripRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
