import { TestBed } from '@angular/core/testing';

import { FormateurMatiereService } from './formateur-matiere.service';

describe('FormateurMatiereService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormateurMatiereService = TestBed.get(FormateurMatiereService);
    expect(service).toBeTruthy();
  });
});
