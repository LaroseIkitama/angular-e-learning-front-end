import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CourseComponent } from './course/course.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReviewListComponent } from './review-list/review-list.component';
import { ParametersComponent } from './parameters/parameters.component';
import {  FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/material.module';
import { CoreModule } from './core/core.module';
import { CoursesModule } from './courses/courses.module';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    DashboardComponent,
    ReviewListComponent,
    ParametersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FontAwesomeModule,
    HttpClientModule,
    CoreModule,
    CoursesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
