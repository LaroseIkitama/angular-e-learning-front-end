import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Category } from 'src/app/core/models/category.model';
import { CategoriesService } from 'src/app/core/services/categories.service';

@Component({
  selector: 'app-information-form-group',
  templateUrl: './information-form-group.component.html',
  styleUrls: ['./information-form-group.component.scss']
})
export class InformationFormGroupComponent implements OnInit {

  @Input() form!: FormGroup

  levels = [{ id: 1, name: "Easy" }, { id: 2, name: "Medium" }, { id: 3, name: "Difficult" }];
  durations = [
    { id: 1, name: "1 Hour" }, { id: 2, name: "2 Hours" }, { id: 3, name: "3 Hours" }, { id: 4, name: "4 Hours" },
    { id: 5, name: "5 Hours" }, { id: 6, name: "6 Hours" }, { id: 7, name: "7 Hours" }, { id: 8, name: "8 Hours" },
    { id: 9, name: "9 Hours" }, { id: 10, name: "10 Hours" }, { id: 11, name: "11 Hours" }, { id: 12, name: "12 Hours" }, { id: 13, name: "13 Hours" }, { id: 14, name: "14 Hours" },
    { id: 15, name: "15 Hours" }, { id: 16, name: "16 Hours" }, { id: 17, name: "17 Hours" }, { id: 18, name: "18 Hours" },
    { id: 19, name: "19 Hours" }, { id: 20, name: "20 Hours" }, { id: 21, name: "21 Hours" }, { id: 22, name: "22 Hours" }, { id: 24, name: "24 Hours" },
  ];

  categories!: Category[];
  constructor(private categoriesService: CategoriesService) {
    this.categoriesService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  ngOnInit(): void {
  }

  step1Submitted() {
    this.form.get('information')!.get('id')!.markAllAsTouched();
    this.form.get('information')!.get('id')!.updateValueAndValidity();

    this.form.get('information')!.get('title')!.markAllAsTouched();
    this.form.get('information')!.get('title')!.updateValueAndValidity();

    this.form.get('information')!.get('description')!.markAllAsTouched();
    this.form.get('information')!.get('description')!.updateValueAndValidity();

    this.form.get('information')!.get('level')!.markAllAsTouched();
    this.form.get('information')!.get('level')!.updateValueAndValidity();

    this.form.get('information')!.get('duration')!.markAllAsTouched();
    this.form.get('information')!.get('duration')!.updateValueAndValidity();

    this.form.get('information')!.get('userId')!.markAllAsTouched();
    this.form.get('information')!.get('userId')!.updateValueAndValidity();

    this.form.get('information')!.get('categoryId')!.markAllAsTouched();
    this.form.get('information')!.get('categoryId')!.updateValueAndValidity();

    this.form.get('information')!.get('status')!.markAllAsTouched();
    this.form.get('information')!.get('status')!.updateValueAndValidity();
  }

}
