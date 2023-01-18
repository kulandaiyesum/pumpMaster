import { TestBed } from '@angular/core/testing';

import { MaterialUsageTypeService } from './material-usage-type.service';

describe('MaterialUsageTypeService', () => {
  let service: MaterialUsageTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaterialUsageTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
