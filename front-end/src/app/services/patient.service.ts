import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private data: any;

  setData(data: any) {
    this.data = data;
  }

  getData() {
    return this.data;
  }
}
