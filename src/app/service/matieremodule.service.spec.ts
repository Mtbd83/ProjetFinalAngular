import { TestBed } from '@angular/core/testing';

import { MatieremoduleService } from './matieremodule.service';

describe('MatieremoduleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatieremoduleService = TestBed.get(MatieremoduleService);
    expect(service).toBeTruthy();
  });
});
