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

  getAllChapter(): Observable<Chapter[]> {
    return this.http.get<Chapter[]>('http://localhost:3000/chapters');
  }

  createChapter(chapter: Chapter): Observable<Chapter> {
    return this.http.post<Chapter>('', chapter, httpOptions);
  }
}
