import { CoursesService } from './courses.service';
import { Component } from '@angular/core';
import { IfStmt } from '@angular/compiler';
import { getMaxListeners } from 'process';

@Component({
    selector: 'courses',
    template: `
                <h1>{{ Title }}</h1>
                <h2 [textContent]="Title"></h2>  
                <h3 [textContent]="Title1"></h3>
                <ul>
                    <li *ngFor="let course of courses">
                        {{ course }}
                    </li>
                </ul>
               <button class="btn btn-primary "[class.active]= isactive>Submit</button>
               <br>
               <br>
                   
                    
                    username: <input [(ngModel)] = email (keyUp.enter)="onKeyUp()"/>
                    <br>
                    <br>
                 
               <br>
               <br>
               <button [style.background]="isactive ? 'blue':'white'">save</button>
               <br>
               <br>
               <div (click)=onDiv()>
                    <button (click)= "onSubmit($event)" >continue</button>
                </div>

                 `
})
export class CoursesComponent{

    Title = "list of courses";
    Title1 = "list of courses";
    isactive= true;
    email= "me@gmail.com";
    onKeyUp(){
        console.log(this.email);
        
    }
    onDiv(){
        console.log("div is clicked");
    }
    onSubmit($event){
        $event.stopPropagation();
        console.log("clicked on continue", $event);
    }    
    courses;

    constructor(Service: CoursesService){
        this.courses= Service.getCourses();
        
    }


}
