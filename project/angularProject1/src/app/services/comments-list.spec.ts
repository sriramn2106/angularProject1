import { TestBed } from '@angular/core/testing';

import { CommentsList } from './comments-list';

describe('CommentsList', () => {
  let service: CommentsList;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentsList);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
