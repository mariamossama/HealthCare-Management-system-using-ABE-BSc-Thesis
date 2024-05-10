import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {ServiceCall} from "../../../Utilities/ServiceCall";
import {Location} from "@angular/common";

export const healthcareAdminGuard: CanActivateFn = (route, state) => {
  const serviceCall = inject(ServiceCall)
  let loggedInUser = serviceCall.getLoggedInUser();
  let router = inject(Router);
  if(loggedInUser && loggedInUser.role == "HealthCareAdmin"){
    return true;
  }
  router.navigate(['/auth/login'])
  return false;
};
