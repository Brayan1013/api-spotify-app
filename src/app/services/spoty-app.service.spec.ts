import { TestBed } from '@angular/core/testing';

import { SpotyAppService } from './spoty-app.service';

describe('SpotyAppService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpotyAppService = TestBed.get(SpotyAppService);
    expect(service).toBeTruthy();
  });
});
