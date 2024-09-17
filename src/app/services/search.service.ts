import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private baseUrl = 'http://localhost:8080/Books'; 

  constructor(private http: HttpClient) { }

  search(name: string): Observable<any> {
    const url = `${this.baseUrl}/search?name=${name}`; 
    return this.http.get<any>(url);
  }
}


