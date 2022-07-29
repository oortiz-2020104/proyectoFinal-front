import { TestBed } from '@angular/core/testing';

import { TuristicCenterRestService } from './turistic-center-rest.service';

describe('TuristicCenterRestService', () => {
  let service: TuristicCenterRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TuristicCenterRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
