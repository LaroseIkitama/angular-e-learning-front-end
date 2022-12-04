import { Component, OnInit } from '@angular/core';
import { Course } from '../core/models/course.model';
import { CoursesService } from '../core/services/courses.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  courses!: Course[];
  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.coursesService.getCoursesPublished().subscribe(courses => {
      this.courses = courses;
    });
    console.log(this.courses);
  }

}
