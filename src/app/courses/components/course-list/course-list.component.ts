import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { CoursesService } from '../../../core/services/courses.service';
import { Course } from "../../../core/models/course.model";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  courses!: any;
  courses$!: Observable<Course[]>;
  dataSource!: MatTableDataSource<Course[]>;

  displayedColumn: string[] = ['id', 'title', 'categoryId', 'level', 'chapiters', 'status', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private coursesService: CoursesService, private router: Router) {
    this.coursesService.getAllCourses().subscribe(data => {
      this.courses = data;
      console.log(data.values);

      this.dataSource = new MatTableDataSource(this.courses);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  ngOnInit(): void {
    this.courses$ = this.coursesService.getAllCourses();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();

    }
  }

  onDelete(): void {
    this.router.navigateByUrl('/dashboard');
  }

  onEdit(): void {
    this.router.navigateByUrl('/dashboard');
  }

}
