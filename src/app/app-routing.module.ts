import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewCategoryComponent } from './categories/components/new-category/new-category.component';
import { CategoryListComponent } from './categories/components/category-list/category-list.component';
import { UpdateCategoryComponent } from './categories/components/update-category/update-category.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewCourseComponent } from './courses2/components/new-course/new-course.component';
import { CourseListComponent } from './courses2/components/course-list/course-list.component';
import { UpdateSectionComponent } from './sections/components/update-section/update-section.component';
import { NewSectionComponent } from './sections/components/new-section/new-section.component';
import { SectionListComponent } from './sections/components/section-list/section-list.component';
import { TrainerDashboardComponent } from './users/components/trainer/trainer-dashboard/trainer-dashboard.component';
import { CertificateComponent } from './courses2/components/certificate/certificate.component';
import { FormationComponent } from './courses2/components/formation/formation.component';
import { DetailsCourseComponent } from './courses2/components/details-course/details-course.component';
import { CommentsComponent } from './courses2/components/comments/comments.component';
import { TakeCourseComponent } from './courses2/components/take-course/take-course.component';
import { LearnerDashboardComponent } from './users/components/learner/learner-dashboard/learner-dashboard.component';
import { LogoutComponent } from './logout/logout.component';
import { AdminDashboardComponent } from './users/components/admin/admin-dashboard/admin-dashboard.component';
import { TrainerListComponent } from './users/components/trainer/trainer-list/trainer-list.component';
import { NewTrainerComponent } from './users/components/trainer/new-trainer/new-trainer.component';
import { UpdateCourseComponent } from './courses2/components/update-course/update-course.component';
import { ParametersComponent } from './users/components/admin/parameters/parameters.component';

const routes: Routes = [
  { path: 'new-course', component: NewCourseComponent },
  { path: 'update-course/:id', component: UpdateCourseComponent },
  { path: 'course-list', component: CourseListComponent },
  { path: 'details-course/:id', component: DetailsCourseComponent },
  { path: 'comments-course/:id', component: CommentsComponent },
  { path: 'take-course/:id', component: TakeCourseComponent },

  { path: 'update-category/:id', component: UpdateCategoryComponent },
  { path: 'new-category', component: NewCategoryComponent },
  { path: 'category-list', component: CategoryListComponent },

  { path: 'update-section/:id', component: UpdateSectionComponent },
  { path: 'new-section', component: NewSectionComponent },
  { path: 'section-list', component: SectionListComponent },

  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },

  { path: 'trainer-dashboard', component: TrainerDashboardComponent },
  { path: 'trainer-list', component: TrainerListComponent },
  { path: 'new-trainer', component: NewTrainerComponent },
  { path: 'update-trainer/:id', component: NewTrainerComponent },


  { path: 'learner-dashboard', component: LearnerDashboardComponent },

  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'admin-parameters', component: ParametersComponent },


  { path: 'certificate', component: CertificateComponent },
  { path: 'formation', component: FormationComponent },

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
