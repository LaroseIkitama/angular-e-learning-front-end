import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of, tap } from "rxjs";
import { Chapter } from "../models/chapter.model";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

const apiUrl = 'http://localhost:3000/chapters';
@Injectable({
  providedIn: 'root'
})

export class ChaptersServices {
  constructor(private http: HttpClient) { }
  getChapter(id: number): Observable<Chapter> {
    return this.http.get<Chapter>(`${apiUrl}/${id}`);
  }
  getChapters(): Observable<Chapter[]> {
    return this.http.get<Chapter[]>(apiUrl).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  updateChapter(chapter: Chapter): Observable<Chapter> {
    return this.http.put<Chapter>(apiUrl, chapter, httpOptions);
  }
  createChapter(chapter: Chapter): Observable<Chapter> {
    return this.http.post<Chapter>(apiUrl, chapter, httpOptions);
  }

  deleteChapter(id: number) {
    return this.http.delete(`${apiUrl}/${id}`, httpOptions);
  }


  private log(response: Chapter[] | Chapter | undefined) {
    console.log(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }
}
