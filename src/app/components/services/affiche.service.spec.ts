import { TestBed } from '@angular/core/testing';

import { AfficheService } from './affiche.service';

describe('AfficheService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AfficheService = TestBed.get(AfficheService);
    expect(service).toBeTruthy();
  });
});
