import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { DialogAlertComponent } from 'src/app/core/components/dialog-alert/dialog-alert.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { Category } from '../../../core/models/category.model';
import { CategoriesService } from '../../../core/services/categories.service';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.scss']
})
export class NewCategoryComponent implements OnInit {
  newCategory = new Category();
  categoryForm!: FormGroup;
  validData = true;
  userConnect=new User();
  constructor(private categoriesService: CategoriesService,
    public authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private matDialog: MatDialog) {
      this.userConnect=this.authService.setUserLoggedData();
      console.log(this.userConnect);
    }

  ngOnInit(): void {
    this.categoryForm = this.formBuilder.group({
      id: [500],
      name: ['', Validators.required],
      user: [this.userConnect],
    });
  }
  onSubmitForm() {
    this.categoriesService.getCategories().subscribe(categories => {
      for (let category of categories) {
        if (category.name.toUpperCase() === this.categoryForm.value.name.toUpperCase()) {
          this.matDialog.open(DialogAlertComponent, {
            width: '30%',
            enterAnimationDuration: '500ms',
            exitAnimationDuration: '500ms',
            data:{
              message:"Impossible de créer cette catégorie car elle existe déjà."
            }
          });
          this.validData = false;
        }
      }
      if (this.validData) {
        this.categoriesService.createCategory(this.categoryForm.value).pipe(
          tap(() => this.router.navigate(['/category-list']))
        ).subscribe();
      }
    });

  }
  // createCategory() {
  //   this.categoriesService.createCategory(this.newCategory).subscribe(category => {
  //     this.router.navigate(['/category-list']);
  //   });
  // }

}
