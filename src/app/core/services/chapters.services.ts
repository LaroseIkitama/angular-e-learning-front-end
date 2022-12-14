import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of, tap } from "rxjs";
import { Chapter } from "../models/chapter.model";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

const apiUrl = 'http://localhost:8080/yekola/chapters';
@Injectable({
  providedIn: 'root'
})

export class ChaptersServices {
  constructor(private http: HttpClient) { }

  getChapter(id: number): Observable<Chapter | undefined> {
    return this.http.get<Chapter>(`${apiUrl}/${id}/get`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  getChapters(): Observable<Chapter[]> {
    return this.http.get<Chapter[]>(apiUrl).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  updateChapter(chapter: Chapter): Observable<Chapter | undefined> {
    return this.http.put<Chapter>(`${apiUrl}/update`, chapter, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }
  createChapter(chapter: Chapter): Observable<null> {
    return this.http.post<Chapter>(`${apiUrl}/create`, chapter, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  deleteChapter(id: number): Observable<null> {
    return this.http.delete(`${apiUrl}/${id}/delete`, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
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
