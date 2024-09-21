import { TestBed } from '@angular/core/testing';

import { GenreSearchService } from './genre-search.service';

describe('GenreSearchService', () => {
  let service: GenreSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenreSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
