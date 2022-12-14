import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of, tap } from "rxjs";
import { Section } from "../models/section.model";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

const apiUrl = 'http://localhost:8080/yekola/sections';

@Injectable({
  providedIn: 'root'
})

export class SectionsService {


  constructor(private http: HttpClient) { }


  getSection(id: number): Observable<Section|undefined> {
    return this.http.get<Section>(`${apiUrl}/${id}/get`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }
  getSections(): Observable<Section[]> {
    return this.http.get<Section[]>(apiUrl).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  updateSection(section: Section): Observable<Section | undefined> {
    return this.http.put<Section>(`${apiUrl}/update`, section, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }
  createSection(section: Section): Observable<null> {
    return this.http.post<Section>(`${apiUrl}/create`, section, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  deleteSection(id: number):Observable<null> {
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
