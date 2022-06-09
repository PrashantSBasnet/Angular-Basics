import { TestBed } from '@angular/core/testing';

import { RevisitService } from './revisit.service';

describe('RevisitService', () => {
  let service: RevisitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RevisitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
