import { TestBed } from '@angular/core/testing';

import { GrossaryService } from './grossary.service';

describe('GrossaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GrossaryService = TestBed.get(GrossaryService);
    expect(service).toBeTruthy();
  });
});
