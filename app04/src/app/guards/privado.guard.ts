import { CanActivateFn } from '@angular/router';

export const privadoGuard: CanActivateFn = (route, state) => {

  let acceso = localStorage.getItem('token');
  if (acceso) {
    return true;
  }
  else{
    return false;
  }


  return false;
};
