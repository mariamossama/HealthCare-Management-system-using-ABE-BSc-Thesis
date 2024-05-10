import { Component } from '@angular/core';
import {NavbarComponent} from "../sharedComponents/navbar/navbar.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-provider',
  standalone: true,
  imports: [
    NavbarComponent,
    RouterOutlet
  ],
  templateUrl: './provider.component.html',
  styleUrl: './provider.component.css'
})
export class ProviderComponent {

}
