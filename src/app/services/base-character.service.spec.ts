import { TestBed } from '@angular/core/testing';

import { BaseCharacterService } from './base-character.service';

describe('BaseCharacterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BaseCharacterService = TestBed.get(BaseCharacterService);
    expect(service).toBeTruthy();
  });
});
