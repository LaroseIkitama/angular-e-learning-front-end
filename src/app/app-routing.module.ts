import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './courses/components/course-list/course-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MultiformComponent } from './courses/components/multiform/multiform.component';
import { ParametersComponent } from './parameters/parameters.component';
import { ReviewListComponent } from './review-list/review-list.component';

const routes: Routes = [
  {path: 'dashboard', component:DashboardComponent},
  {path: 'new-course', component:MultiformComponent},
  {path: 'course-list', component:CourseListComponent},
  {path: 'review-list', component:ReviewListComponent},
  {path: 'parameters', component:ParametersComponent},
  {path: '', redirectTo:'dashboard',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
