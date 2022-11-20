import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/core/models/category.model';
import { CategoriesService } from 'src/app/core/services/categories.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  languages = [{ 'id': 1, 'name': 'FRENCH' }, { 'id': 2, 'name': 'ENGLISH' }];
  levels = [{ 'id': 1, 'name': 'EASY' }, { 'id': 2, 'name': 'MEDIUM' }, { 'id': 3, 'name': 'DIFFICULT' }];
  categories!: Category[];
  constructor(private categoriesService: CategoriesService, private router: Router) { }

  @Input() form!: FormGroup;
  ngOnInit(): void {
    this.categoriesService.getAllCategories().subscribe(cat => {
      this.categories = cat;
      console.log(this.categories);
    });
  }

  step1Submitted() {
    this.form.get('information')!.get('title')!.markAsTouched();
    this.form.get('information')!.get('title')!.updateValueAndValidity();

    this.form.get('information')!.get('description')!.markAsTouched();
    this.form.get('information')!.get('description')!.updateValueAndValidity();

    this.form.get('information')!.get('language')!.markAsTouched();
    this.form.get('information')!.get('language')!.updateValueAndValidity();

    this.form.get('information')!.get('level')!.markAsTouched();
    this.form.get('information')!.get('level')!.updateValueAndValidity();

    this.form.get('information')!.get('category')!.markAsTouched();
    this.form.get('information')!.get('category')!.updateValueAndValidity();
  }

}
