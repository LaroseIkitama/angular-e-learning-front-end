import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of, tap } from "rxjs";
import { Category } from "../models/category.model";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  constructor(private http: HttpClient) { }

  getCategory(id: number): Observable<Category> {
    return this.http.get<Category>(`http://localhost:3000/categories/${id}`);
  }
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('http://localhost:3000/categories').pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  updateCategory(category: Category): Observable<Category> {
    return this.http.put<Category>('http://localhost:3000/categories', category, httpOptions);
  }
  createCategory(category: Category): Observable<Category> {
    return this.http.post<Category>('http://localhost:3000/categories', category, httpOptions);
  }

  deleteCategory(id: number) {
    return this.http.delete(`http://localhost:3000/categories/${id}`, httpOptions);
  }


  private log(response: Category[] | Category | undefined) {
    console.log(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }

}
