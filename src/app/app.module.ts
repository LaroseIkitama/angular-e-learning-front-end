import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CourseComponent } from './course/course.component';
import { ParametersComponent } from './parameters/parameters.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/material.module';
import { CoreModule } from './core/core.module';
import { CoursesModule } from './courses/courses.module';
import { CategoriesModule } from './categories/categories.module';
import { HomeComponent } from './home/home.component';
import { ChaptersModule } from './chapters/chapters.module';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    ParametersComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    CoreModule,
    CoursesModule,
    CategoriesModule,
    ChaptersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
