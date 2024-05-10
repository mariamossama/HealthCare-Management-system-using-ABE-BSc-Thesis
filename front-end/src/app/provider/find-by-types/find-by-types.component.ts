import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ServiceUrl} from "../../../../Utilities/ServiceUrl";
import {ServiceCall} from "../../../../Utilities/ServiceCall";
import {ButtonModule} from "primeng/button";
import {DatePipe} from "@angular/common";
import {InputTextModule} from "primeng/inputtext";
import {SharedModule} from "primeng/api";
import {Table, TableModule} from "primeng/table";

@Component({
  selector: 'app-find-by-types',
  standalone: true,
  imports: [
    ButtonModule,
    DatePipe,
    InputTextModule,
    SharedModule,
    TableModule
  ],
  templateUrl: './find-by-types.component.html',
  styleUrl: './find-by-types.component.css'
})
export class FindByTypesComponent implements OnInit{

  type: any = '';
  allUsers: any = [];
  constructor(private _route: ActivatedRoute,
              private _serviceUrl: ServiceUrl,
              private _serviceCall: ServiceCall) {
  }

  ngOnInit(): void {
    this._route.queryParams.subscribe((params: any)=>{
      debugger
      this.type = params.type;
      this.getByTypes(this.type);
    })
  }

  getByTypes(type: any){
    let url = this._serviceUrl.baseUrl + this._serviceUrl.getUserByType + '/' + type;
    this._serviceCall.getOpservable(url, this._serviceCall.getDefaultHeaders(null)).subscribe((response: any)=>{
      debugger
      this.allUsers = response;
    });
  }

  clear(table: Table) {
    table.clear();
  }

  onInputChange(table: Table, value: any) {
    table.filterGlobal(value.value, 'contains');
  }
}
