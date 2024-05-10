import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {ServiceCall} from "../../../Utilities/ServiceCall";
import {Location} from "@angular/common";

export const nurseGuard: CanActivateFn = (route, state) => {
  const serviceCall = inject(ServiceCall)
  let router = inject(Router);
  let loggedInUser = serviceCall.getLoggedInUser();
  if(loggedInUser && loggedInUser.role == "Nurse"){
    return true;
  }
  router.navigate(['/auth/login']);
  return false;
};
