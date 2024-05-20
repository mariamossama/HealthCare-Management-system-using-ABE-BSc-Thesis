import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {ServiceUrl} from "../../../../Utilities/ServiceUrl";
import {ServiceCall} from "../../../../Utilities/ServiceCall";
import {DropdownModule} from "primeng/dropdown";
import {CalendarModule} from "primeng/calendar";
import {MultiSelectModule} from "primeng/multiselect";
import {RippleModule} from "primeng/ripple";
import Swal from 'sweetalert2'
import {Router} from "@angular/router";
import {InputTextareaModule} from "primeng/inputtextarea";


@Component({
  selector: 'app-add-patient',
  standalone: true,
  imports: [
    FormsModule,
    InputTextModule,
    ReactiveFormsModule,
    DropdownModule,
    CalendarModule,
    MultiSelectModule,
    RippleModule,
    InputTextareaModule
  ],
  templateUrl: './add-patient.component.html',
  styleUrl: './add-patient.component.css'
})
export class AddPatientComponent implements OnInit{
  userData: any;
  genders: any = [];
  selectedGender: any;
  doctors: any = [];
  nurses: any = [];
  maxDate: any;

  constructor(private _serviceUrl: ServiceUrl,
              private _serviceCall: ServiceCall,
              private _router: Router){
  }


  myForm = new FormGroup({
    firstName: new FormControl(null, [
      Validators.required,
    ]),
    secondName: new FormControl(null, [
      Validators.required,
    ]),
    gender: new FormControl(null,[
      Validators.required
    ]),
    dateOfBirth: new FormControl(null, [
      Validators.required
    ]),
    doctors: new FormControl(null, [
      Validators.required
    ]),
    nurses: new FormControl(null, [
      Validators.required
    ]),
    medicalHistory: new FormControl(null, [
      Validators.required
    ]),
    symptomSummary: new FormControl(null, [
      Validators.required
    ]),
    currentDiagnosis: new FormControl(null, [
      Validators.required
    ])
  });
  addNewPatient() {
    let url = this._serviceUrl.baseUrl + this._serviceUrl.addPatient;
    const doctorValues = this.myForm.get('doctors')?.value || [];
    const doctorIds = doctorValues.map((doctor: any) => doctor.id);

    let isAllDoctorsSelected = doctorIds.includes(-1);
    let isCardiologyDepSelected = doctorIds.includes(-2);
    let isNeurologyDepSelected = doctorIds.includes(-3);
    let isOncologyDepSelected = doctorIds.includes(-4);

    let requestObj = {
      "firstName": this.myForm.get("firstName")?.value + "",
      "lastName": this.myForm.get("secondName")?.value + "",
      "dateOfBirth": this.myForm.get("dateOfBirth")?.value + "",
      "genderId": Number((this.myForm.get("gender")?.value as any)?.id ?? null),
      "medicalHistory": this.myForm.get("medicalHistory")?.value + "",
      "symptomSummary": this.myForm.get("symptomSummary")?.value + "",
      "currentDiagnosis": this.myForm.get("currentDiagnosis")?.value + "",
      "doctorIds": isAllDoctorsSelected ? [-1] : (isCardiologyDepSelected ? [-2] : (isOncologyDepSelected ? [-4] :(isNeurologyDepSelected ? [-3] : doctorIds))),
      "nurseIds": (this.myForm.get("nurses")?.value || []).map((nurse: any) => {
        return nurse.id;
      }),
    };
    this._serviceCall.postObservable(url, requestObj,this._serviceCall.getDefaultHeaders(null)).subscribe((response:any)=>{
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

  ngOnInit(): void {
    this.getAllGenders();
    this.getAllDoctors();
    this.getAllNurses();
    this.userData = this._serviceCall.getLoggedInUser();
    this.maxDate = new Date();
  }

  getAllGenders(){
    let url = this._serviceUrl.baseUrl + this._serviceUrl.getAllGender;
    this._serviceCall.getOpservable(url, this._serviceCall.getDefaultHeaders(null)).subscribe((response: any)=>{
      this.genders = response;
    });
  }

  getAllDoctors() {
    let url = this._serviceUrl.baseUrl + this._serviceUrl.getRole + '/' + 'Doctor';
    this._serviceCall.getOpservable(url, this._serviceCall.getDefaultHeaders(null)).subscribe((response: any) => {
        this.doctors = [{ id: -1, name: 'All Doctors' }, {id: -2, name : 'Cardiology Department'},{ id: -3, name: 'Neurology Department' }, {id: -4, name : 'Oncology Department'}, ...response.users];
    });
}


  getAllNurses(){
    let url = this._serviceUrl.baseUrl + this._serviceUrl.getRole + '/' + 'Nurse';
    this._serviceCall.getOpservable(url, this._serviceCall.getDefaultHeaders(null)).subscribe((response: any)=>{
      this.nurses = response.users;
    });
  }

  getAllPatient() {
    this._router.navigate(['/doctor/all-patients']);
  }
}
