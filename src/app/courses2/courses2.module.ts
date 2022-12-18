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
import { DialogChapterFormGroupComponent } from './components/dialog-chapter-form-group/dialog-chapter-form-group.component';
import { HttpClientModule } from '@angular/common/http';
import { CertificateComponent } from './components/certificate/certificate.component';
import { FormationComponent } from './components/formation/formation.component';
import { DetailsCourseComponent } from './components/details-course/details-course.component';
import { CommentsComponent } from './components/comments/comments.component';
import { TakeCourseComponent } from './components/take-course/take-course.component';
import { DialogChapterUpdateFormGroupComponent } from './components/dialog-chapter-update-form-group/dialog-chapter-update-form-group.component';
import { ReviewsComponent } from './components/reviews/reviews.component';



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
    DialogSectionUpdateFormGroupComponent,
    DialogChapterFormGroupComponent,
    CertificateComponent,
    FormationComponent,
    DetailsCourseComponent,
    CommentsComponent,
    TakeCourseComponent,
    DialogChapterUpdateFormGroupComponent,
    ReviewsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MaterialModule
  ],
  exports: [
    NewCourseComponent,
    CourseListComponent,
    UpdateCourseComponent,
    InformationFormGroupComponent,
    ContentFormGroupComponent,
    MediaFormGroupComponent,
    PublishFormGroupComponent,
    DialogSectionFormGroupComponent,
    DialogSectionUpdateFormGroupComponent,
    DialogChapterFormGroupComponent,
    CertificateComponent,
    FormationComponent,
    DetailsCourseComponent,
    CommentsComponent,
    TakeCourseComponent,
    DialogChapterUpdateFormGroupComponent
  ]
})
export class Courses2Module { }
