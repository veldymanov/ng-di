import { TestBed } from '@angular/core/testing';

import { DiTestOneService } from './di-test-one.service';

describe('DiTestOneService', () => {
  let service: DiTestOneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiTestOneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
