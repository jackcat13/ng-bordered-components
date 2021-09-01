import { TestBed } from '@angular/core/testing';

import { BorderedButtonService } from './bordered-button.service';

describe('BorderedButtonService', () => {
  let service: BorderedButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BorderedButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
