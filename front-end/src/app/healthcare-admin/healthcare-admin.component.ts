import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {NavbarComponent} from "../sharedComponents/navbar/navbar.component";

@Component({
  selector: 'app-healthcare-admin',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent
  ],
  templateUrl: './healthcare-admin.component.html',
  styleUrl: './healthcare-admin.component.css'
})
export class HealthcareAdminComponent {

}
