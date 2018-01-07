import { TestBed, inject } from '@angular/core/testing';

import { ChildResolverService } from './child-resolver.service';

describe('ChildResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChildResolverService]
    });
  });

  it('should be created', inject([ChildResolverService], (service: ChildResolverService) => {
    expect(service).toBeTruthy();
  }));
});
