import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogAlertComponent } from 'src/app/core/components/dialog-alert/dialog-alert.component';
import { Category } from 'src/app/core/models/category.model';
import { CategoriesService } from 'src/app/core/services/categories.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss']
})
export class UpdateCategoryComponent implements OnInit {
  category: Category | undefined;
  currentCategoryName !: any;
  validData = true;


  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private categoriesService: CategoriesService,
    private matDialog: MatDialog) {
  }

  ngOnInit(): void {
    const categoryId: string | null = this.activatedRoute.snapshot.paramMap.get('id');
    if (categoryId) {
      this.categoriesService.getCategory(+categoryId).subscribe((category) => {
        this.category = category;
        this.currentCategoryName = category?.name;
      });
    } else {
      this.category = undefined;
    }
  }
  submitForm() {
      this.categoriesService.getCategories().subscribe(categories => {
        for (let category of categories) {
          if ((this.category?.name.toUpperCase() != this.currentCategoryName.toUpperCase()) && (category.name.toUpperCase() === this.category?.name.toUpperCase())) {
            this.matDialog.open(DialogAlertComponent, {
              width: '30%',
              enterAnimationDuration: '500ms',
              exitAnimationDuration: '500ms',
              data: {
                message: "Impossible de modifier, il existe déja une catégorie portant ce nom."
              }
            });
            this.validData = false;
          }else{
            this.validData = true;
          }
        }
        if (this.validData && this.category) {
          this.categoriesService.updateCategory(this.category)
            .subscribe((category) => {
              if (category) {
                this.router.navigate(['/category-list']);
              }
            });
        }
      });
  }

}
