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

  levels = [{ id: 1, name: "Facile" }, { id: 2, name: "Moyen" }, { id: 3, name: "Difficile" }];
  durations = [
    { id: 1, name: "1 Heure" }, { id: 2, name: "2 Heures" }, { id: 3, name: "3 Heures" }, { id: 4, name: "4 Heures" },
    { id: 5, name: "5 Heures" }, { id: 6, name: "6 Heures" }, { id: 7, name: "7 Heures" }, { id: 8, name: "8 Heures" },
    { id: 9, name: "9 Heures" }, { id: 10, name: "10 Heures" }, { id: 11, name: "11 Heures" }, { id: 12, name: "12 Heures" }, { id: 13, name: "13 Heures" }, { id: 14, name: "14 Heures" },
    { id: 15, name: "15 Heures" }, { id: 16, name: "16 Heures" }, { id: 17, name: "17 Heures" }, { id: 18, name: "18 Heures" },
    { id: 19, name: "19 Heures" }, { id: 20, name: "20 Heures" }, { id: 21, name: "21 Heures" }, { id: 22, name: "22 Heures" }, { id: 24, name: "24 Heures" },
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

    this.form.get('information')!.get('user')!.markAllAsTouched();
    this.form.get('information')!.get('user')!.updateValueAndValidity();

    this.form.get('information')!.get('category')!.markAllAsTouched();
    this.form.get('information')!.get('category')!.updateValueAndValidity();

    this.form.get('information')!.get('status')!.markAllAsTouched();
    this.form.get('information')!.get('status')!.updateValueAndValidity();
  }

}
