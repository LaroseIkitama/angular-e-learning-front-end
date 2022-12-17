import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Course } from "../models/course.model";
import { catchError, Observable, of, tap } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

const apiUrl = 'http://localhost:8080/yekola/courses';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  getFirstCourse():Observable<Course>{
    return this.http.get<Course>(`${apiUrl}/first`);
  }
  getCourse(id: number): Observable<Course | undefined> {
    return this.http.get<Course>(`${apiUrl}/${id}/get`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }


  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(apiUrl).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  createCourse(course: Course): Observable<null> {
    return this.http.post<Course>(`${apiUrl}/create`, course, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  updateCourse(course: Course): Observable<Course | undefined> {
    return this.http.put<Course>(`${apiUrl}/update`, course, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  deleteCourse(id: number): Observable<null> {
    return this.http.delete(`${apiUrl}/${id}/delete`, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }


  getCoursesPublished(): Observable<Course[]> {
    return this.http.get<Course[]>(`${apiUrl}/draft`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  private log(response: any) {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }



}
