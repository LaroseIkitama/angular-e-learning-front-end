import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './courses/components/course-list/course-list.component';
import { MultiformComponent } from './courses/components/multiform/multiform.component';
import { NewCategoryComponent } from './categories/components/new-category/new-category.component';
import { CategoryListComponent } from './categories/components/category-list/category-list.component';
import { UpdateCategoryComponent } from './categories/components/update-category/update-category.component';
import { NewChapterComponent } from './chapters/components/new-chapter/new-chapter.component';
import { ChapterListComponent } from './chapters/components/chapter-list/chapter-list.component';
import { SingleChapterComponent } from './chapters/components/single-chapter/single-chapter.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UpdateFormationComponent } from './formations/components/update-formation/update-formation.component';
import { NewFormationComponent } from './formations/components/new-formation/new-formation.component';
import { FormationListComponent } from './formations/components/formation-list/formation-list.component';

const routes: Routes = [
  { path: 'new-course', component: MultiformComponent },
  { path: 'course-list', component: CourseListComponent },

  { path: 'update-category/:id', component: UpdateCategoryComponent },
  { path: 'new-category', component: NewCategoryComponent },
  { path: 'category-list', component: CategoryListComponent },

  { path: 'update-formation/:id', component: UpdateFormationComponent },
  { path: 'new-formation', component: NewFormationComponent },
  { path: 'formation-list', component: FormationListComponent },



  { path: 'details-chapter/:id', component: SingleChapterComponent },
  { path: 'new-chapter', component: NewChapterComponent },
  { path: 'chapter-list', component: ChapterListComponent },

  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
