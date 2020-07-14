import { AuthoursService } from './../authours.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'authours',
  templateUrl: './authours.component.html',
  styleUrls: ['./authours.component.css']
})
export class AuthoursComponent  {

  authours;
  
  constructor(service:AuthoursService){
    this.authours = service.getauthours();
  }

}
