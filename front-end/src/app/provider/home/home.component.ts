import {Component, OnInit} from '@angular/core';
import {ServiceUrl} from "../../../../Utilities/ServiceUrl";
import {ServiceCall} from "../../../../Utilities/ServiceCall";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  dashboardData: any = [];

  constructor(private _serviceUrl: ServiceUrl,
              private _serviceCall: ServiceCall,
              private _router: Router) {
  }
  ngOnInit(): void {
    this.getDashboardData();
  }

  getDashboardData(){
    let url = this._serviceUrl.baseUrl + this._serviceUrl.getDashboardData;
    this._serviceCall.getOpservable(url, this._serviceCall.getDefaultHeaders(null)).subscribe((response: any)=>{
      this.dashboardData = response;
    });
  }

  navigateTo(type: string) {
    this._router.navigate(['/provider/all-types'],
      {queryParams: {type: type}});
  }
}
