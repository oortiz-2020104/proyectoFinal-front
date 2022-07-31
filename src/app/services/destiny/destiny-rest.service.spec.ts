import { TestBed } from '@angular/core/testing';

import { DestinyRestService } from './destiny-rest.service';

describe('DestinyRestService', () => {
  let service: DestinyRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DestinyRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
