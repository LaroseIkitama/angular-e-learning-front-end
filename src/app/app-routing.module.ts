import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './courses/components/course-list/course-list.component';
import { MultiformComponent } from './courses/components/multiform/multiform.component';
import { ParametersComponent } from './parameters/parameters.component';
import { ReviewListComponent } from './review-list/review-list.component';
import { NewCategoryComponent } from './categories/components/new-category/new-category.component';
import { CategoryListComponent } from './categories/components/category-list/category-list.component';
import { UpdateCategoryComponent } from './categories/components/update-category/update-category.component';
import { NewChapterComponent } from './chapters/components/new-chapter/new-chapter.component';
import { ChapterListComponent } from './chapters/components/chapter-list/chapter-list.component';
import { SingleChapterComponent } from './chapters/components/single-chapter/single-chapter.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'update-category/:id', component: UpdateCategoryComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'new-course', component: MultiformComponent },
  { path: 'course-list', component: CourseListComponent },
  { path: 'review-list', component: ReviewListComponent },
  { path: 'parameters', component: ParametersComponent },

  { path: 'new-category', component: NewCategoryComponent },
  { path: 'category-list', component: CategoryListComponent },

  { path: 'details-chapter/:id', component: SingleChapterComponent },
  { path: 'new-chapter', component: NewChapterComponent },
  { path: 'chapter-list', component: ChapterListComponent },


  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
