import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from 'src/app/core/models/category.model';
import { CategoriesService } from 'src/app/core/services/categories.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss']
})
export class UpdateCategoryComponent implements OnInit {
  category!: Category;
  currentCategory = new Category();
  categoryForm!: FormGroup;
  category$!: Observable<Category>;


  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.category$ = this.categoriesService.getCategory(this.activatedRoute.snapshot.params['id']);
    this.categoriesService.getCategory(this.activatedRoute.snapshot.params['id']).subscribe(cat => {
      this.currentCategory = cat;
      console.log(this.currentCategory);
    });

  }

  submitForm() {
    console.log(this.currentCategory);
    this.categoriesService.updateCategory(this.currentCategory);
    this.router.navigate(['/category-list']);
  }

}
