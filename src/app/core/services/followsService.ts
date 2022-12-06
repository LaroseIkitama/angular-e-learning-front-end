import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of, tap } from "rxjs";
import { Follow } from "../models/follow.model";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

const apiUrl = 'http://localhost:3000/follows';
@Injectable({
  providedIn: 'root'
})

export class FollowsService {
  constructor(private http: HttpClient) {

  }

  getFollow(id: number): Observable<Follow> {
    return this.http.get<Follow>(`${apiUrl}/${id}`);
  }

  getFollows(): Observable<Follow[]> {
    return this.http.get<Follow[]>(apiUrl).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  createFollow(follow: Follow): Observable<Follow> {
    return this.http.post<Follow>(apiUrl, follow, httpOptions);
  }

  deleteFollow(id: number) {
    return this.http.delete(`${apiUrl}/${id}`, httpOptions);
  }

  private log(response: Follow[] | Follow | undefined) {
    console.log(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }
}
