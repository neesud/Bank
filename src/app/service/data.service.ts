import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  sdata="serviceData"

  constructor() { }
  checkData(){
    return "hello hi"
  }
}
