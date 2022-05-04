import { TestBed } from '@angular/core/testing';

import { Home.CropsService } from './home.crops.service';

describe('Home.CropsService', () => {
  let service: Home.CropsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Home.CropsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
