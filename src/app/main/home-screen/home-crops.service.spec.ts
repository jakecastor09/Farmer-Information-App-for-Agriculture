import { TestBed } from '@angular/core/testing';

import { HomeCropsService } from './home-crops.service';

describe('HomeCropsService', () => {
  let service: HomeCropsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeCropsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
