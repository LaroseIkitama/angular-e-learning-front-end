import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { Category } from '../../../core/models/category.model';
import { CategoriesService } from '../../../core/services/categories.service';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.scss']
})
export class NewCategoryComponent implements OnInit {
  newCategory = new Category();
  categoryForm!: FormGroup;
  message!: string;
  constructor(private categoriesService: CategoriesService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.categoryForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required]
    });
  }
  onSubmitForm() {
    this.categoriesService.createCategory(this.categoryForm.value).pipe(
      tap(() => this.router.navigateByUrl('/category-list'))
    ).subscribe();
  }
  createCategory() {
    this.categoriesService.createCategory(this.newCategory).subscribe(category => {
      console.log(category);
      this.router.navigateByUrl('/category-list');
    })

  }

}
