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
  apiUrl:string='http://localhost:8080/yekola/categories';
  constructor(private http: HttpClient) { }

  getCategory(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.apiUrl}/${id}`);
  }
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  updateCategory(category: Category): Observable<Category> {
    return this.http.put<Category>(`${this.apiUrl}/update`, category, httpOptions);
  }
  createCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.apiUrl, category, httpOptions);
  }

  deleteCategory(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}/delete`, httpOptions);
  }


  private log(response: Category[] | Category | undefined) {
    console.log(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }

}
