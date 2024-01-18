import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const unauthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const user = localStorage.getItem('LoggedUser');
  if (user) {
    router.navigateByUrl('mynotes');
    return false;
  } else {
    return true;
  }
};
