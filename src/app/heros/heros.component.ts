import { HerosService } from './../heros.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  heros

  constructor(service:HerosService) { 
    this.heros= service.gethero()

  }

  ngOnInit(): void {
  }

}
