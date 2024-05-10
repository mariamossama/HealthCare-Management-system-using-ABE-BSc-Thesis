import {Component, OnInit} from '@angular/core';
import {ServiceCall} from "../../../../Utilities/ServiceCall";
import {ServiceUrl} from "../../../../Utilities/ServiceUrl";
import {ButtonModule} from "primeng/button";
import {DatePipe, NgIf} from "@angular/common";
import {InputTextModule} from "primeng/inputtext";
import {SharedModule} from "primeng/api";
import {Table, TableModule} from "primeng/table";
import {RippleModule} from "primeng/ripple";

@Component({
  selector: 'app-doctor-notify-patient',
  standalone: true,
  imports: [
    ButtonModule,
    DatePipe,
    InputTextModule,
    SharedModule,
    TableModule,
    NgIf,
    RippleModule
  ],
  templateUrl: './doctor-notify-patient.component.html',
  styleUrl: './doctor-notify-patient.component.css'
})
export class DoctorNotifyPatientComponent implements OnInit{

  doctorAppointment: any = [];

  constructor(private _serviceCall: ServiceCall,
              private _serviceUrl: ServiceUrl) {
  }

  ngOnInit(): void {
    this.getDoctorAppointment();
  }

  getDoctorAppointment(){
    let url = this._serviceUrl.baseUrl + this._serviceUrl.getDoctorAppointment;
    this._serviceCall.getOpservable(url, this._serviceCall.getDefaultHeaders(null)).subscribe((response: any)=>{
      this.doctorAppointment = response;
    });
  }

  clear(dt: Table) {
    dt.clear();
  }

  add(patient: any) {
    let url = this._serviceUrl.baseUrl + this._serviceUrl.bookAppointment + '/' + patient.id;
    this._serviceCall.getOpservable(url, this._serviceCall.getDefaultHeaders(null)).subscribe((response: any)=>{
      this.doctorAppointment = this.doctorAppointment.filter((patient: any)=> patient.id != response.id);
    });
  }
}
