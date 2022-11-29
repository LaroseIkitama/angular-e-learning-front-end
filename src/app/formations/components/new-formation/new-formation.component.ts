import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/core/models/category.model';
import { CategoriesService } from 'src/app/core/services/categories.service';

@Component({
  selector: 'app-new-formation',
  templateUrl: './new-formation.component.html',
  styleUrls: ['./new-formation.component.scss']
})
export class NewFormationComponent implements OnInit {
  levels = [
    { id: 1, name: "Bac +3 (Bachelor's degree)" },
    { id: 2, name: "Bac +5 (Master's degree)" },
  ];
  durations = [
    { id: 1, name: "1 Month" },
    { id: 2, name: "2 Months" },
    { id: 3, name: "3 Months" },
    { id: 4, name: "4 Months" },
    { id: 5, name: "5 Months" },
    { id: 6, name: "6 Months" },
    { id: 7, name: "7 Months" },
    { id: 8, name: "8 Months" },
    { id: 9, name: "9 Months" },
    { id: 10, name: "10 Months" },
    { id: 11, name: "11Months" },
    { id: 12, name: "12 Months" },
  ];
  categories!:Category[];
  constructor(private categoriesService:CategoriesService) { }

  ngOnInit(): void {
    this.categoriesService.getCategories().
      subscribe(categories => {
        this.categories = categories;
      }
      );
  }

}
