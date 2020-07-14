import { HerosService } from './heros.service';
import { AuthoursService } from './authours.service';
import { CoursesService } from './courses.service';
import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthoursComponent } from './authours/authours.component';
import { HerosComponent } from './heros/heros.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthoursComponent,
    HerosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    CoursesService,
    AuthoursService,
    HerosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
