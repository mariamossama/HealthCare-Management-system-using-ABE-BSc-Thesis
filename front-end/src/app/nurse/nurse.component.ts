import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {NavbarComponent} from "../sharedComponents/navbar/navbar.component";

@Component({
  selector: 'app-nurse',
  standalone: true,
    imports: [
        RouterOutlet,
        NavbarComponent
    ],
  templateUrl: './nurse.component.html',
  styleUrl: './nurse.component.css'
})
export class NurseComponent {

}
