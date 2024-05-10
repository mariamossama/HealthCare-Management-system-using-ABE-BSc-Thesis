import { Component } from '@angular/core';
import {ServiceCall} from "../../../../Utilities/ServiceCall";
import {ServiceUrl} from "../../../../Utilities/ServiceUrl";
import {Router, RouterLink} from "@angular/router";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  send = false;

  constructor(private _serviceCall: ServiceCall, private _serviceUrl: ServiceUrl, private _router: Router) {
  }
  myForm = new FormGroup({
    email: new FormControl(null, [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(9)
    ])
  });

  login() {
    this.send = true;
    let url = this._serviceUrl.baseUrl + this._serviceUrl.login;
    let requestBody = {
      "email": this.myForm.get("email")?.value + "",
      "password": this.myForm.get("password")?.value + ""
    };
    this._serviceCall.postObservable(url, requestBody, {}).subscribe((response: any) => {
      localStorage.setItem("Authorization", "Bearer " + response.token);
      let getLoggedInUser = this._serviceCall.getLoggedInUser();
        if (response.user.role.name == "Doctor") {
          this._router.navigate(['/doctor']);
        } else if (response.user.role.name == "HealthCareAdmin") {
          this._router.navigate(['/healthcare-admin']);
        } else if (response.user.role.name == "HealthCareProvider") {
          this._router.navigate(['/provider']);
        } else if (response.user.role.name == "Nurse") {
          this._router.navigate(['/nurse']);
        }
      this.send = false;
    });
    this.send = false;
  }

}
