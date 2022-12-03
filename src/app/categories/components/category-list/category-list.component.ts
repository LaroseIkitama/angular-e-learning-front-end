import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoriesService } from '../../../core/services/categories.service';
import { Observable } from 'rxjs';
import { Category } from '../../../core/models/category.model';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

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

  constructor(private categoriesService: CategoriesService, public dialog: MatDialog) { }

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
    let confirmation = confirm("Are you sure? You want to delete this category?");
    if (confirmation) {
      this.categoriesService.deleteCategory(category.id).subscribe(() => { });
      window.location.reload();
    }
  }
  applyFilter(event: Event) {
    window.location.reload();
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
