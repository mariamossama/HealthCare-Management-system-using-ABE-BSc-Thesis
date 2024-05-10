import { Routes } from '@angular/router';
import {authGuard} from "./auth/auth.guard";
import {healthcareAdminGuard} from "./healthcare-admin/healthcare-admin.guard";
import {nurseGuard} from "./nurse/nurse.guard";
import {doctorGuard} from "./doctor/doctor.guard";
import {patientGuard} from "./patient/patient.guard";
import {providerGuard} from "./provider/provider.guard";

export const routes: Routes = [
  {'path': 'auth', canActivate: [authGuard], 'children': [
      {'path': 'login', 'loadComponent': () => (import('./auth/login/login.component')).then(m=>m.LoginComponent)}
    ]},
  {'path': 'healthcare-admin', canActivate: [healthcareAdminGuard], 'loadComponent': () => (import('./healthcare-admin/healthcare-admin.component').then(m=>m.HealthcareAdminComponent)), 'children': [
      {'path': 'user-list', 'loadComponent': () => (import('./healthcare-admin/user-list/user-list.component').then(m=>m.UserListComponent))},
      {'path': '', 'pathMatch': 'full', 'redirectTo': '/healthcare-admin/user-list'}
    ]},
  {'path': 'nurse', canActivate: [nurseGuard], 'loadComponent': () => (import('./nurse/nurse.component').then(m=>m.NurseComponent)), 'children': [
      {'path': 'all-patients', 'loadComponent': () => (import('./doctor/all-patients/all-patients.component').then(m=>m.AllPatientsComponent))},
      {'path': 'patient-list', 'loadComponent': () => (import('./nurse/patient-list/patient-list.component').then(m=>m.PatientListComponent))},
      {'path': '', 'pathMatch': 'full', 'redirectTo': '/nurse/all-patients'}
    ]},
  {'path': 'doctor', canActivate: [doctorGuard], 'loadComponent': () => (import('./doctor/doctor.component').then(m=>m.DoctorComponent)), 'children':[
      {'path': 'add-patient', 'loadComponent': () => (import('./doctor/add-patient/add-patient.component').then(m=>m.AddPatientComponent))},
      {'path': 'all-patients', 'loadComponent': () => (import('./doctor/all-patients/all-patients.component').then(m=>m.AllPatientsComponent))},
      {'path': 'notify-patient', 'loadComponent': () => (import('./doctor/doctor-notify-patient/doctor-notify-patient.component').then(m=>m.DoctorNotifyPatientComponent))},
      {'path': 'patient-profile/:id', 'loadComponent': () => (import('./doctor/patient-profile/patient-profile.component').then(m=>m.PatientProfileComponent))},
      {'path': '', 'pathMatch': "full", 'redirectTo': '/doctor/add-patient'}
    ]},
  {'path': 'provider', canActivate: [providerGuard], 'loadComponent': () => (import('./provider/provider.component').then(m=>m.ProviderComponent)), 'children':[
      {'path': 'home', 'loadComponent': () => (import('./provider/home/home.component').then(m=>m.HomeComponent))},
      {'path': 'all-types', 'loadComponent': () => (import('./provider/find-by-types/find-by-types.component').then(m=>m.FindByTypesComponent))},
      {'path': '', 'pathMatch': "full", 'redirectTo': '/provider/home'}
    ]},
  {'path': 'patient', 'loadComponent': () => (import('./patient/patient.component').then(m=>m.PatientComponent)), 'children': [
      {'path': 'appoint', 'loadComponent': () => (import('./patient/doctor-appointment/doctor-appointment.component').then(m=>m.DoctorAppointmentComponent))},
      {'path': '', 'pathMatch': "full", 'redirectTo': '/patient/appoint'}
    ]},
  {'path': '', 'pathMatch': 'full', 'redirectTo': '/auth/login'},
  {'path': '**', 'pathMatch': 'full', loadComponent: () => (import('./error-page/error-page.component').then(m=>m.ErrorPageComponent))}

];
