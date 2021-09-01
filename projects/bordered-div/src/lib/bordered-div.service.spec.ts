import { TestBed } from '@angular/core/testing';

import { BorderedDivService } from './bordered-div.service';

describe('BorderedDivService', () => {
  let service: BorderedDivService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BorderedDivService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
