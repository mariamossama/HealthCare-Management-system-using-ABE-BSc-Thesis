import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {ServiceCall} from "../../../Utilities/ServiceCall";
import {Location} from "@angular/common";

export const authGuard: CanActivateFn = (route, state) => {
  const serviceCall = inject(ServiceCall);
  const router = inject(Router);
  if (localStorage.length > 0 && !serviceCall.checkJwt()) {
    let loginUser = serviceCall.getLoggedInUser();
    switch (loginUser.role) {
      case "HealthCareAdmin":{
        router.navigate(['/healthcare-admin']);
        break;
      }
      case "Nurse":{
        router.navigate(['/nurse']);
        break;
      }
    }
  }
  return true;
};
