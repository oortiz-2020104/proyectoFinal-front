import { TestBed } from '@angular/core/testing';

import { DepartmentRestService } from './department-rest.service';

describe('DepartmentRestService', () => {
  let service: DepartmentRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartmentRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
