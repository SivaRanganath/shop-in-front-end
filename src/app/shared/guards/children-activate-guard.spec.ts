import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { childrenActivateGuard } from './children-activate-guard';

describe('childrenActivateGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => childrenActivateGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
