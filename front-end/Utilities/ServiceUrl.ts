import {environment} from "../environment";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ServiceUrl {
  public baseUrl = '';
  public login = '/auth/login';
  public getAllOperationUsers = '/users/all-operational-users';
  public getAllOperationsRoles = '/role/all-operation-roles';
  public getAllDepartments = '/department/all-operation-deps';
  public editOperationUSer = '/users/edit';
  public deActiveOperationUsers = '/users/deactive-operation-user';
  public addNewOperationUser = '/users/save-operation-user';
  public getAllGender = '/gender/all';
  public getRole = '/role/find-by-name';
  public addPatient = '/patient/add';
  public allPatient = '/patient/all';
  public getDoctorPatients = '/doctor/patient';
  public getDashboardData = '/users/dashboard';
  public getUserByType = '/users/findByType';
  public appoint = '/appointment/save';
  public getDoctorAppointment = '/appointment/get-doctor-appointment';
  public bookAppointment = '/appointment/book';
  public getPatient = '/patient/finById';

  constructor() {
    this.getUrl()
  }

  getUrl() {
    this.baseUrl = environment.baseUrl;
  }
}
