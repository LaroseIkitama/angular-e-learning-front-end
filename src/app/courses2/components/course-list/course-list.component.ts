import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Category } from 'src/app/core/models/category.model';
import { Course } from 'src/app/core/models/course.model';
import { CategoriesService } from 'src/app/core/services/categories.service';
import { CoursesService } from 'src/app/core/services/courses.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  courses!: Course[];
  categories!: Category[];
  dataSource!: MatTableDataSource<Course[]>;
  displayedColumn: string[] = ['id', 'title', 'category', 'status', 'level', 'actions'];


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private coursesService: CoursesService,
    private categoriesService: CategoriesService,
    private router:Router) {
    }

  ngOnInit(): void {
    this.coursesService.getCourses().
      subscribe(courses => {
        this.courses = courses;
        this.dataSource = new MatTableDataSource(<any>this.courses);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
      );

    this.categoriesService.getCategories().
      subscribe(categories => {
        this.categories = categories;
      }
      );

  }

  deleteCourse(course: Course) {
    let confirmation = confirm("Are you sure? You want to delete this course?");
    if (confirmation) {
      this.coursesService.deleteCourse(course.id).subscribe(() =>{});
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
  createCourse(){
    this.router.navigate(['/new-course']);
  }

}
