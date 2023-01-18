import { TestBed } from '@angular/core/testing';

import { PumpMasterService } from './pump-master.service';

describe('PumpMasterService', () => {
  let service: PumpMasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PumpMasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
