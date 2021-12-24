import { TestBed } from '@angular/core/testing';

import { GladiatorTypeService } from './gladiator-type.service';

describe('GladiatorTypeService', () => {
  let service: GladiatorTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GladiatorTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
