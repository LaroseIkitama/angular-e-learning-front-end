import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewCourseComponent } from './components/new-course/new-course.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { UpdateCourseComponent } from './components/update-course/update-course.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/material.module';



@NgModule({
  declarations: [
    NewCourseComponent,
    CourseListComponent,
    UpdateCourseComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports:[
    NewCourseComponent,
    CourseListComponent,
    UpdateCourseComponent
  ]
})
export class Courses2Module { }
