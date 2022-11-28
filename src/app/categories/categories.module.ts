import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { MaterialModule } from 'src/material.module';
import { NewCategoryComponent } from './components/new-category/new-category.component';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateCategoryComponent } from './components/update-category/update-category.component';



@NgModule({
  declarations: [

    CategoryListComponent,
    NewCategoryComponent,
    UpdateCategoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    CategoryListComponent,
    NewCategoryComponent,
    UpdateCategoryComponent
  ]
})
export class CategoriesModule { }
