import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Course } from "../models/course.model";
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courses: Course[] = [];

  constructor(private http: HttpClient) { }

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>('http://localhost:3000/courses');
  }

  createCourse(course: Course): Observable<Course> {
    return this.http.post<Course>('', course, httpOptions);
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
