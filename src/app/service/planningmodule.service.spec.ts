import { TestBed } from '@angular/core/testing';

import { PlanningmoduleService } from './planningmodule.service';

describe('PlanningmoduleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlanningmoduleService = TestBed.get(PlanningmoduleService);
    expect(service).toBeTruthy();
  });
});
