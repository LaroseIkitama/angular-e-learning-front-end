import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewCourseComponent } from './new-course/new-course.component';
import { ParametersComponent } from './parameters/parameters.component';
import { ReviewListComponent } from './review-list/review-list.component';
import { StepperCourseComponent } from './stepper-course/stepper-course.component';

const routes: Routes = [
  {path: '', redirectTo:'dashboard',pathMatch:'full'},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'new-course', component:NewCourseComponent},
  {path: 'course-list', component:CourseListComponent},
  {path: 'review-list', component:ReviewListComponent},
  {path: 'parameters', component:ParametersComponent},
  {path: 'stepper', component:StepperCourseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
