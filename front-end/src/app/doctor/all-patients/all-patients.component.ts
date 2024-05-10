import {Component, OnInit} from '@angular/core';
import {ServiceUrl} from "../../../../Utilities/ServiceUrl";
import {ServiceCall} from "../../../../Utilities/ServiceCall";
import {ButtonModule} from "primeng/button";
import {DropdownModule} from "primeng/dropdown";
import {InputTextModule} from "primeng/inputtext";
import {DatePipe, NgIf} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {RippleModule} from "primeng/ripple";
import {SharedModule} from "primeng/api";
import {Table, TableModule} from "primeng/table";
import {Router} from "@angular/router";
import {PatientService} from "../../services/patient.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-patients',
  standalone: true,
  imports: [
    ButtonModule,
    DropdownModule,
    InputTextModule,
    NgIf,
    ReactiveFormsModule,
    RippleModule,
    SharedModule,
    TableModule,
    DatePipe
  ],
  templateUrl: './all-patients.component.html',
  styleUrl: './all-patients.component.css'
})
export class AllPatientsComponent implements OnInit{
  patients: any = [];
  userData: any;
  constructor(private _serviceUrl: ServiceUrl,
              private _serviceCall: ServiceCall,
              private _router: Router,
              private _patientService: PatientService) {
  }
  ngOnInit(): void {
    this.getAllDoctorPatients();
    this.userData = this._serviceCall.getLoggedInUser();
  }

  getAllDoctorPatients(){
    let url = this._serviceUrl.baseUrl + this._serviceUrl.allPatient;
    this._serviceCall.getOpservable(url, this._serviceCall.getDefaultHeaders(null)).subscribe((response:any)=>{
      this.patients = response;
    });

  }

  clear(table: Table) {
    table.clear();
  }

  onInputChange(table: Table, value: any) {
    table.filterGlobal(value.value, 'contains');
  }


  NavigateToAddPage() {
    this._router.navigate(['/doctor/add-patient'])
  }

  validateAndNavigateIfValid(patient: any) {
    let isValid = true;
    patient.doctors.forEach((doctor: any)=>{
      if(doctor.user.id == this.userData.id){
        isValid = true;
        return;
      }
    });
    if(isValid){
      this._router.navigate(['/doctor/patient-profile/' + patient.id]);
    }else{
      Swal.fire({
        title: "Access Denied",
        html: "You Are Not Authenticated To Access This Patient",
        icon: "error",
        width: '500px',
        confirmButtonText: "Close"
      });
    }
  }
}
