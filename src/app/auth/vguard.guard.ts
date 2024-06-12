import { inject } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

export const vauthGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.islogedin() && authService.role == 'Vendor') {
    return true;
  }

  // Redirect to the login page
  return router.parseUrl('/login');
};
