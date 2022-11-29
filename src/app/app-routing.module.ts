import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewCategoryComponent } from './categories/components/new-category/new-category.component';
import { CategoryListComponent } from './categories/components/category-list/category-list.component';
import { UpdateCategoryComponent } from './categories/components/update-category/update-category.component';
import { NewChapterComponent } from './chapters/components/new-chapter/new-chapter.component';
import { ChapterListComponent } from './chapters/components/chapter-list/chapter-list.component';
import { SingleChapterComponent } from './chapters/components/single-chapter/single-chapter.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewCourseComponent } from './courses2/components/new-course/new-course.component';
import { CourseListComponent } from './courses2/components/course-list/course-list.component';
import { UpdateSectionComponent } from './sections/components/update-section/update-section.component';
import { NewSectionComponent } from './sections/components/new-section/new-section.component';
import { SectionListComponent } from './sections/components/section-list/section-list.component';

const routes: Routes = [
  { path: 'new-course', component: NewCourseComponent },
  { path: 'course-list', component: CourseListComponent },

  { path: 'update-category/:id', component: UpdateCategoryComponent },
  { path: 'new-category', component: NewCategoryComponent },
  { path: 'category-list', component: CategoryListComponent },

  { path: 'update-section/:id', component: UpdateSectionComponent },
  { path: 'new-section', component: NewSectionComponent },
  { path: 'section-list', component: SectionListComponent },



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
