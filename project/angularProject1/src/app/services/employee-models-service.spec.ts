import { TestBed } from '@angular/core/testing';

import { EmployeeModelsService } from './employee-models-service';

describe('EmployeeModelsService', () => {
  let service: EmployeeModelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeModelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
