import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of, tap } from "rxjs";
import { Section } from "../models/section.model";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

const apiUrl = 'http://localhost:3000/sections';

@Injectable({
  providedIn: 'root'
})

export class SectionsService {


  constructor(private http: HttpClient) { }


  createSection(section: Section): Observable<Section> {
    return this.http.post<Section>(apiUrl, section, httpOptions);
  }

  deleteSection(id: number) {
    return this.http.delete(`${apiUrl}/${id}`, httpOptions);
  }

  getSection(id: number): Observable<Section> {
    return this.http.get<Section>(`${apiUrl}/${id}`);
  }

  getSections(): Observable<Section[]> {
    return this.http.get<Section[]>(apiUrl).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  getAllSectionOfCOurse(id: number): Observable<Section[]> {
    return this.http.get<Section[]>(`http://localhost:3000/courses/${id}/sections`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );

  }

  private log(response: Section[] | Section | undefined) {
    console.log(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }
}
