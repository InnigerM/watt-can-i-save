import { TestBed } from '@angular/core/testing';

import { ElectricityPriceService } from './electricity-price.service';

describe('ElectricityPriceService', () => {
  let service: ElectricityPriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElectricityPriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
