import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewCourseComponent } from './components/new-course/new-course.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { UpdateCourseComponent } from './components/update-course/update-course.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/material.module';
import { InformationFormGroupComponent } from './components/information-form-group/information-form-group.component';
import { ContentFormGroupComponent } from './components/content-form-group/content-form-group.component';
import { MediaFormGroupComponent } from './components/media-form-group/media-form-group.component';
import { PublishFormGroupComponent } from './components/publish-form-group/publish-form-group.component';
import { DialogSectionFormGroupComponent } from './components/dialog-section-form-group/dialog-section-form-group.component';
import { DialogSectionUpdateFormGroupComponent } from './components/dialog-section-update-form-group/dialog-section-update-form-group.component';



@NgModule({
  declarations: [
    NewCourseComponent,
    CourseListComponent,
    UpdateCourseComponent,
    InformationFormGroupComponent,
    ContentFormGroupComponent,
    MediaFormGroupComponent,
    PublishFormGroupComponent,
    DialogSectionFormGroupComponent,
    DialogSectionUpdateFormGroupComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports:[
    NewCourseComponent,
    CourseListComponent,
    UpdateCourseComponent,
    InformationFormGroupComponent,
    ContentFormGroupComponent,
    MediaFormGroupComponent,
    PublishFormGroupComponent
  ]
})
export class Courses2Module { }
