import { CanActivateFn } from '@angular/router';

export const enrutamientoGuard: CanActivateFn = (route, state) => {
  return true;
};
