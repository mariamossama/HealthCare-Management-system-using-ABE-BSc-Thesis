import {Component, OnInit} from '@angular/core';
import {PatientService} from "../../services/patient.service";
import {ActivatedRoute} from "@angular/router";
import {ServiceUrl} from "../../../../Utilities/ServiceUrl";
import {ServiceCall} from "../../../../Utilities/ServiceCall";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-patient-profile',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './patient-profile.component.html',
  styleUrl: './patient-profile.component.css'
})
export class PatientProfileComponent implements OnInit {
  patientId: any;
  patient: any;
  constructor(private _route: ActivatedRoute,
              private _serviceUrl: ServiceUrl,
              private _serviceCall: ServiceCall) {
  }

  ngOnInit(): void {
    this._route.params.subscribe((params: any) => {
      this.patientId = params['id'];
      this.getPatientData(this.patientId);
    });
  }

  getPatientData(id: any){
    let url = this._serviceUrl.baseUrl + this._serviceUrl.getPatient + '/' + id;
    this._serviceCall.getOpservable(url, this._serviceCall.getDefaultHeaders(null)).subscribe((response: any)=>{
      debugger
      this.patient = response;
    });
  }
}
