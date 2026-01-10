import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication';
import { inject } from '@angular/core';

export const childrenActivateGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthenticationService);
  const router = inject(Router)

  if (!authService.isLoggedIn()) {
    router.navigate(['/login']);
    return false;
  }
  return true;
};
