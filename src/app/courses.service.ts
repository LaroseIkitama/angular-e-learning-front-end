import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Course } from "./models/course.model";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courses: Course[] = [];
  /*tabs private baseUrl = "http://localhost:3000/courses"; */

  constructor(private http: HttpClient) { }

  /* tabs getData() {
    return this.http.get(this.baseUrl);
  } */

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>('http://localhost:3000/courses');
  }

  getCourseById(courseId: number): Course {
    const course = this.courses.find(course => course.id === courseId);

    if (course) {
      return course;
    } else {
      throw new Error("Course not found!");

    }

  }
}
