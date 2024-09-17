import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl = "http://localhost:8080/Books";

  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(`${this.baseUrl}`);
  }
  

}