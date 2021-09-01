import { TestBed } from '@angular/core/testing';

import { BorderedTitleService } from './bordered-title.service';

describe('BorderedTitleService', () => {
  let service: BorderedTitleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BorderedTitleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
