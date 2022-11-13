import { TestBed } from '@angular/core/testing';

import { OpportunitegetService } from './opportuniteget.service';

describe('OpportunitegetService', () => {
  let service: OpportunitegetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpportunitegetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
