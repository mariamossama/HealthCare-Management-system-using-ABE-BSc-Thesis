import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {ServiceCall} from "../../../Utilities/ServiceCall";

export const patientGuard: CanActivateFn = (route, state) => {
  const serviceCall = inject(ServiceCall)
  let router = inject(Router);
  let loggedInUser = serviceCall.getLoggedInUser();
  if(loggedInUser && loggedInUser.role == "Patient"){
    return true;
  }
  router.navigate(['/auth/login']);
  return false;
};
