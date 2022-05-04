import { TestBed } from '@angular/core/testing';

import { HomeLivestockService } from './home-livestock.service';

describe('HomeLivestockService', () => {
  let service: HomeLivestockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeLivestockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
