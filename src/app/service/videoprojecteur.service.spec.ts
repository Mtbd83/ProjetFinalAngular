import { TestBed } from '@angular/core/testing';

import { VideoprojecteurService } from './videoprojecteur.service';

describe('VideoprojecteurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VideoprojecteurService = TestBed.get(VideoprojecteurService);
    expect(service).toBeTruthy();
  });
});
