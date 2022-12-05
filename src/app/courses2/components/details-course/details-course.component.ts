import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/core/models/course.model';
import { CoursesService } from 'src/app/core/services/courses.service';

@Component({
  selector: 'app-details-course',
  templateUrl: './details-course.component.html',
  styleUrls: ['./details-course.component.scss']
})
export class DetailsCourseComponent implements OnInit {

  courses = new Course();
  constructor(private activateRoute: ActivatedRoute,
    private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.coursesService.getCourse(this.activateRoute.snapshot.params['id']).subscribe(course => {
      this.courses = course;
      console.log(this.courses);
    })
  }

}
