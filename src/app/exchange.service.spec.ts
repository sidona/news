import { TestBed, inject } from '@angular/core/testing';

import { ExchangeService } from './exchange.service';

describe('ExchangeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExchangeService]
    });
  });

  it('should ...', inject([ExchangeService], (service: ExchangeService) => {
    expect(service).toBeTruthy();
  }));
});
