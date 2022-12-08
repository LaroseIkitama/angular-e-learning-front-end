import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoriesService } from '../../../core/services/categories.service';
import { Category } from '../../../core/models/category.model';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { DialogAlertDeleteComponent } from 'src/app/core/components/dialog-alert-delete/dialog-alert-delete.component';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  categories!: Category[];
  dataSource!: MatTableDataSource<Category[]>;
  displayedColumn: string[] = ['id', 'name', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private categoriesService: CategoriesService,
    private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.categoriesService.getCategories().
      subscribe(categories => {
        this.categories = categories;
        this.dataSource = new MatTableDataSource(<any>this.categories);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
      );
  }

  deleteCategory(category: Category) {
    const dialogRef = this.matDialog.open(DialogAlertDeleteComponent, {
      width: '30%',
      enterAnimationDuration: '600ms',
      exitAnimationDuration: '300ms',
      data: {
        message: "Voulez-vous vraiment supprimer cette catégorie ??"
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.data[0].confirmed) {
          this.categoriesService.deleteCategory(category.id).subscribe(() => {  window.location.reload();});
        }
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
