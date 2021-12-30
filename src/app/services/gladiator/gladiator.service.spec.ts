import { TestBed } from '@angular/core/testing';

import { GladiatorService } from './gladiator.service';

describe('GladiatorService', () => {
  let service: GladiatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GladiatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
