import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of, tap } from "rxjs";
import { Review } from "../models/review.model";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}
const apiUrl = 'http://localhost:3000/reviews';
@Injectable({
  providedIn: 'root'
})

export class ReviewsService {
  constructor(private http: HttpClient) {

  }

  getReview(id: number): Observable<Review> {
    return this.http.get<Review>(`${apiUrl}/${id}`);
  }

  getReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(apiUrl).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  createReview(review: Review): Observable<Review> {
    return this.http.post<Review>(apiUrl, review, httpOptions);
  }

  deleteReview(id: number) {
    return this.http.delete(`${apiUrl}/${id}`, httpOptions);
  }

  getAllReviewsOfCourseNoteFive(courseId: number): Observable<Review[]> {
    return this.http.get<Review[]>(`http://localhost:3000/courses/${courseId}/reviews?note=5`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  private log(response: Review[] | Review | undefined) {
    console.log(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }


}
