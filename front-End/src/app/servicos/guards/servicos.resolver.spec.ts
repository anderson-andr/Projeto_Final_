import { TestBed } from '@angular/core/testing';

import { ServicosResolver } from './servicos.resolver';

describe('ServicosResolver', () => {
  let resolver: ServicosResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ServicosResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
