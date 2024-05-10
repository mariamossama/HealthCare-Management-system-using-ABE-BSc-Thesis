import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {Router, RouterLink} from "@angular/router";
import {ServiceCall} from "../../../../Utilities/ServiceCall";
import {ServiceUrl} from "../../../../Utilities/ServiceUrl";
import {DropdownModule} from "primeng/dropdown";
import {RippleModule} from "primeng/ripple";
import {ButtonModule} from "primeng/button";
import {CalendarModule} from "primeng/calendar";
import Swal from 'sweetalert2'
import {InputTextareaModule} from "primeng/inputtextarea";

@Component({
  selector: 'app-doctor-appointment',
  standalone: true,
    imports: [
        FormsModule,
        InputTextModule,
        ReactiveFormsModule,
        RouterLink,
        DropdownModule,
        RippleModule,
        ButtonModule,
        CalendarModule,
        InputTextareaModule
    ],
  templateUrl: './doctor-appointment.component.html',
  styleUrl: './doctor-appointment.component.css'
})
export class DoctorAppointmentComponent implements OnInit{
  send = false;
  doctors: any = [];
  genders: any = [];
  constructor(private _serviceCall: ServiceCall,
              private _serviceUrl: ServiceUrl) {
  }

  ngOnInit(): void {
    this.getDoctors();
    this.getAllGenders();
  }

  myForm = new FormGroup({
    email: new FormControl(null, [
      Validators.required,
      Validators.email
    ]),
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(9)
    ]),
    gender: new FormControl(null, [
      Validators.required
    ]),
    medicalHistory: new FormControl(null, [
      Validators.required
    ]),
    date: new FormControl(null, [
      Validators.required
    ]),
    doctor: new FormControl(null, [
      Validators.required
    ]),
    dateOfBirth: new FormControl(null, [
      Validators.required
    ])
  });

  appoint() {
    let url = this._serviceUrl.baseUrl + this._serviceUrl.appoint;
    let body = {
      "email": this.myForm.get("email")?.value + "",
      "name": this.myForm.get("name")?.value + "",
      "medicalHistory": this.myForm.get("medicalHistory")?.value + "",
      "genderId": Number((this.myForm.get("gender")?.value as any)?.id ?? null),
      "doctorId": Number((this.myForm.get("doctor")?.value as any)?.id ?? null),
      "appointmentDate": new Date(this.myForm.get("date")?.value + "").toISOString(),
      "dateOfBirth": new Date(this.myForm.get("dateOfBirth")?.value + "").toISOString()
    }
    debugger;
    this._serviceCall.postObservable(url, body, {}).subscribe((response: any)=>{
      this.reset();
      Swal.fire({
        title: "Success",
        html: "Patient Added Successfully",
        icon: "success",
        width: '500px',
        confirmButtonText: "Close"
      });
    });
  }
  reset(){
    this.myForm.reset();
  }
  getDoctors(){
    let url = this._serviceUrl.baseUrl + this._serviceUrl.getUserByType + '/' + 'doctor';
    this._serviceCall.getOpservable(url, {}).subscribe((response: any)=>{
      this.doctors = response;
    });
  }

  getAllGenders(){
    let url = this._serviceUrl.baseUrl + this._serviceUrl.getAllGender;
    this._serviceCall.getOpservable(url, this._serviceCall.getDefaultHeaders(null)).subscribe((response: any)=>{
      this.genders = response;
    });
  }
}
