import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthoursService {

  getauthours(){

    return ["teja", "vinay", "nirmala"]

  }
  
}
