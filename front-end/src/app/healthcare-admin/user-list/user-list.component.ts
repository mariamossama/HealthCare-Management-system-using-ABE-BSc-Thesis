import {Component, OnInit} from '@angular/core';
import {ServiceUrl} from "../../../../Utilities/ServiceUrl";
import {ServiceCall} from "../../../../Utilities/ServiceCall";
import {Table, TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {RippleModule} from "primeng/ripple";
import {NgIf} from "@angular/common";
import {MessageService} from "primeng/api";
import {ToastModule} from "primeng/toast";
import Swal from 'sweetalert2'
import {DropdownModule} from "primeng/dropdown";
import {DialogModule} from "primeng/dialog";


@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    TableModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    RippleModule,
    NgIf,
    ToastModule,
    DropdownModule,
    DialogModule,
    ReactiveFormsModule,
  ],
  providers: [MessageService],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  allOperationalUsers: any = [];
  allOperationalRoles: any = [];
  clonedUsers: { [s: string]: any } = {};
  showAddUserDialogue: boolean = false;
  selectedRole: any = null;

  constructor(private _serviceUrl: ServiceUrl,
              private _serviceCall: ServiceCall,
              private _messageService: MessageService
  ) {
  }

  ngOnInit(): void {
    this.getAllOperationUsers();
    this.getAllOperationRoles();
  }

  myForm = new FormGroup({
    email: new FormControl(null, [
      Validators.required,
      Validators.email
    ]),
    name: new FormControl(null, [
      Validators.required,
    ]),
    phone: new FormControl(null, [
      Validators.required
    ]),
    role: new FormControl(null, [
      Validators.required
    ])
  });

  getAllOperationUsers() {
    let url = this._serviceUrl.baseUrl + this._serviceUrl.getAllOperationUsers;
    this._serviceCall.getOpservable(url, this._serviceCall.getDefaultHeaders(null)).subscribe((response: any) => {
      this.allOperationalUsers = response;
    });
  }

  addUserDialogue() {
    this.showAddUserDialogue = true;
  }

  getAllOperationRoles() {
    let url = this._serviceUrl.baseUrl + this._serviceUrl.getAllOperationsRoles;
    this._serviceCall.getOpservable(url, this._serviceCall.getDefaultHeaders(null)).subscribe((response: any) => {
      debugger;
      this.allOperationalRoles = response;
    });
  }

  clear(table: Table) {
    table.clear();
  }

  onInputChange(table: Table, value: any) {
    table.filterGlobal(value.value, 'contains');
  }

  onRowEditInit(user: any) {
    this.clonedUsers[user.id as string] = {...user};
    this.selectedRole = user.role;
    this.getAllOperationRoles();
  }

  onRowEditSave(user: any) {
    delete this.clonedUsers[user.id as string];
    this.editUser(user);
  }

  editUser(user: any) {
    let url = this._serviceUrl.baseUrl + this._serviceUrl.editOperationUSer + '/' + user.id;
    let requestBody = {
      "name": user.name,
      "email": user.email,
      "phone": user.phone,
      "roleId": user.role.id
    };

    this._serviceCall.postObservable(url, requestBody, this._serviceCall.getDefaultHeaders(null)).subscribe((response: any) => {
      Swal.fire({
        title: "Success",
        html: "User Updated Successfully",
        icon: "success",
        width: '500px',
        confirmButtonText: "Close"
      });
    });
  }

  deActiveUser(user: any) {
    let url = this._serviceUrl.baseUrl + this._serviceUrl.deActiveOperationUsers + '/' + user.id;
    this._serviceCall.getOpservable(url, this._serviceCall.getDefaultHeaders(null)).subscribe((response: any) => {
      this.allOperationalUsers = this.allOperationalUsers.filter((item:any)=>item.id != user.id);
      Swal.fire({
        title: "Success",
        html: "User DeActivated Successfully",
        icon: "success",
        width: '500px',
        confirmButtonText: "Close"
      });
    });
  }

  onRowEditCancel(user: any, index: number) {
    this.allOperationalUsers[index] = this.clonedUsers[user.id as string];
    delete this.clonedUsers[user.id as string];
  }

  addNewUser() {
    this.showAddUserDialogue = false;
    let url = this._serviceUrl.baseUrl + this._serviceUrl.addNewOperationUser;
    this.selectedRole = this.myForm.get("role")?.value;
    let requestBody = {
      "name":  this.myForm.get("name")?.value + "",
      "email": this.myForm.get("email")?.value + "",
      "phone": this.myForm.get("phone")?.value + "",
      "roleId": this.selectedRole.id
    }
    this._serviceCall.postObservable(url, requestBody, this._serviceCall.getDefaultHeaders(null)).subscribe((response: any)=>{
      this.allOperationalUsers.push(response);
      Swal.fire({
        title: "Success",
        html: "User Added Successfully",
        icon: "success",
        width: '500px',
        confirmButtonText: "Close"
      });
    });
  }
}
