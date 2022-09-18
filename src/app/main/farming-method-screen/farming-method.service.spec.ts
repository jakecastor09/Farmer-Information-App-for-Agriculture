import { TestBed } from '@angular/core/testing';

import { FarmingMethodService } from './farming-method.service';

describe('FarmingMethodService', () => {
  let service: FarmingMethodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FarmingMethodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
