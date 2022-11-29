import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Course } from "../models/course.model";
import { catchError, Observable, of, tap } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

const apiUrl ='http://localhost:3000/courses';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courses: Course[] = [];

  constructor(private http: HttpClient) { }

  getCourse(id: number): Observable<Course> {
    return this.http.get<Course>(`${apiUrl}/${id}`);
  }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(apiUrl).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  createCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(apiUrl, course, httpOptions);
  }

  deleteCourse(id: number) {
    return this.http.delete(`${apiUrl}/${id}`, httpOptions);
  }

  private log(response: Course[] | Course | undefined) {
    console.log(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }
}
