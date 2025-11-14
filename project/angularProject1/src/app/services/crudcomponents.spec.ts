import { TestBed } from '@angular/core/testing';

import { Crudcomponents } from './crudcomponents';

describe('Crudcomponents', () => {
  let service: Crudcomponents;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Crudcomponents);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
