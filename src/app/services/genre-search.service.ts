import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenreSearchService {

  private baseUrl = 'http://localhost:8080/Books';

  constructor(private http: HttpClient) {}

  fetchBooksByGenre(genre: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/genres/${genre}`);
  }
}
