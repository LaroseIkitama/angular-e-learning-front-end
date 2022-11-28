import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Chapter } from "../models/chapter.model";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}
@Injectable({
  providedIn: 'root'
})

export class ChaptersServices {
  constructor(private http: HttpClient) { }

  getChapter(id: number): Observable<Chapter> {
    return this.http.get<Chapter>(`http://localhost:3000/chapters/${id}`);
  }

  getChapters(): Observable<Chapter[]> {
    return this.http.get<Chapter[]>('http://localhost:3000/chapters');
  }

  createChapter(chapter: Chapter): Observable<Chapter> {
    return this.http.post<Chapter>('http://localhost:3000/chapters', chapter, httpOptions);
  }

  deleteChapter(id: number) {
    return this.http.delete(`http://localhost:3000/chapters/${id}`, httpOptions);
  }

  updateChapter(chapter: Chapter): Observable<Chapter> {
    return this.http.put<Chapter>('http://localhost:3000/chapters', chapter, httpOptions);
  }
}
