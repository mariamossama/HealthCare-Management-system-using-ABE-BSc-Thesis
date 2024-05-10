import {Component, OnInit} from '@angular/core';
import {MenubarModule} from "primeng/menubar";
import {Router} from "@angular/router";
import {ServiceUrl} from "../../../../Utilities/ServiceUrl";
import {ServiceCall} from "../../../../Utilities/ServiceCall";
import {ButtonModule} from "primeng/button";
import {AvatarModule} from "primeng/avatar";
import {MenuModule} from "primeng/menu";
import {NgIf} from "@angular/common";
import {RippleModule} from "primeng/ripple";
import {TableModule} from "primeng/table";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MenubarModule,
    ButtonModule,
    AvatarModule,
    MenuModule,
    NgIf,
    RippleModule,
    TableModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
  items: any = [];
  userData: any;

  constructor(private _router: Router, private _serviceUrl: ServiceUrl, private _serviceCall: ServiceCall) {
  }

  ngOnInit(): void {
    this.userData = this._serviceCall.getLoggedInUser();
  }

  logout() {
    localStorage.clear();
    this._router.navigate(['/auth/login']);
  }
}
