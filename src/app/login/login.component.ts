import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


   data="your perfect banking partner"

   placeholderData="enter acno"



   uname:any
   pwd:any

   
  constructor(private ds:DataService) {

  }
  ngOnInit():void{

  }

  login(){
    alert(this.ds.checkData())
  }

  unameChange(event:any){
    console.log(event.target.value);
    
  }

}

