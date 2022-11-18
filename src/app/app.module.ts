import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CourseComponent } from './course/course.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MaterialModule } from 'src/material-module';
import { NewCourseComponent } from './new-course/new-course.component';
import { CourseListComponent } from './course-list/course-list.component';
import { ReviewListComponent } from './review-list/review-list.component';
import { ParametersComponent } from './parameters/parameters.component';
import { StepperCourseComponent } from './stepper-course/stepper-course.component';
import {  FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TableCourseComponent } from './table-course/table-course.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    HeaderComponent,
    DashboardComponent,
    SidenavComponent,
    NewCourseComponent,
    CourseListComponent,
    ReviewListComponent,
    ParametersComponent,
    StepperCourseComponent,
    TableCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
