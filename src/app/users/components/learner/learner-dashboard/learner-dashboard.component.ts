import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Category } from '../../../../core/models/category.model';
import { Course } from '../../../../core/models/course.model';
import { Follow } from '../../../../core/models/follow.model';
import { CategoriesService } from '../../../../core/services/categories.service';
import { CoursesService } from '../../../../core/services/courses.service';
import { FollowsService } from '../../../../core/services/followsService';

@Component({
  selector: 'app-learner-dashboard',
  templateUrl: './learner-dashboard.component.html',
  styleUrls: ['./learner-dashboard.component.scss']
})
export class LearnerDashboardComponent implements OnInit {
  courses!: Course[];
  categories!: Category[];

  followData!: Follow[];
  dataSource!: MatTableDataSource<Course[]>;
  displayedColumn: string[] = ['course', 'date', 'progress', 'category', 'certificate'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private coursesService: CoursesService,
    private categoriesService: CategoriesService,
    private router: Router,
    private followsService: FollowsService) { }

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
    this.followsService.getFollows().
      subscribe(follows => {
        this.followData = follows;
      }
      );

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
