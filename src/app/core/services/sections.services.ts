import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Section } from "../models/section.model";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class SectionsServices {
  constructor(private http: HttpClient) { }

  getAllSection(): Observable<Section[]> {
    return this.http.get<Section[]>('http://localhost:3000/sections');
  }

  createSection(section: Section): Observable<Section> {
    return this.http.post<Section>('', section, httpOptions);
  }
}
