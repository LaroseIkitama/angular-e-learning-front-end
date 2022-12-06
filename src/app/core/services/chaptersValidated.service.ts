import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of, tap } from "rxjs";
import { ChapterValidated } from "../models/chapterValidated.model";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

const apiUrl = 'http://localhost:3000/chapterValidated';

@Injectable({
  providedIn: "root"
})

export class chaptersValidatedService {
  constructor(private http: HttpClient) { }

  getChapterValidated(id: number): Observable<ChapterValidated> {
    return this.http.get<ChapterValidated>(`${apiUrl}/${id}`);
  }

  getChaptersValidated(): Observable<ChapterValidated[]> {
    return this.http.get<ChapterValidated[]>(apiUrl).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  getAllValidateChapters(): Observable<ChapterValidated[]> {
    return this.http.get<ChapterValidated[]>(`http://localhost:3000/chapterValidated?status=1`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  updateChapterValidated(chapterValidated: ChapterValidated): Observable<ChapterValidated> {
    return this.http.put<ChapterValidated>(apiUrl, chapterValidated, httpOptions);
  }

  createChapterValidated(chapterValidated: ChapterValidated): Observable<ChapterValidated> {
    return this.http.post<ChapterValidated>(apiUrl, chapterValidated, httpOptions);
  }

  deleteChapterValidated(id: number) {
    return this.http.delete(`${apiUrl}/${id}`, httpOptions);
  }

  private log(response: ChapterValidated[] | ChapterValidated | undefined) {
    console.log(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }

}
