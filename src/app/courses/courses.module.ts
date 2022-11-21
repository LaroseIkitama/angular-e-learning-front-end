import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './components/course-list/course-list.component';
import { NewCourseComponent } from './components/new-course/new-course.component';
import { MaterialModule } from 'src/material.module';
import { RouterModule } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MultiformComponent } from './components/multiform/multiform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InformationComponent } from './components/information/information.component';
import { ContentComponent } from './components/content/content.component';
import { MediaComponent } from './components/media/media.component';
import { PublishComponent } from './components/publish/publish.component';
import { ModalPopupSectionTitleComponent } from './components/modal-popup-section-title/modal-popup-section-title.component';



@NgModule({
  declarations: [
    CourseListComponent,
    NewCourseComponent,
    MultiformComponent,
    InformationComponent,
    ContentComponent,
    MediaComponent,
    PublishComponent,
    ModalPopupSectionTitleComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    MatFormFieldModule,
    MatPaginatorModule,
    ReactiveFormsModule
  ],
  exports: [
    CourseListComponent,
    NewCourseComponent,
    MultiformComponent
  ]
})
export class CoursesModule { }
