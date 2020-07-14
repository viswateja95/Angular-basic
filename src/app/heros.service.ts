import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HerosService {

  gethero(){
   return ["superman", "batman", "hulk"]
  }
}
