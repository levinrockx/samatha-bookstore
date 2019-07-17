import { TestBed } from '@angular/core/testing';

import { HttplayerService } from './httplayer.service';

describe('HttplayerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttplayerService = TestBed.get(HttplayerService);
    expect(service).toBeTruthy();
  });
});
