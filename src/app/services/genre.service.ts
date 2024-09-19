import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  private apiUrl = 'http://localhost:8080/Books/genres';

  constructor(private http: HttpClient) {}

  getGenres(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl);
  }
}
