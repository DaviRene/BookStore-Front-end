import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./layout/header/header.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { BookComponent } from './book/book.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { Input } from '@angular/core';
import { Book } from './Book';
import { BookService } from './services/Book.service';
import { SearchService } from './services/search.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent,BookComponent,SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project';
  books: any[] = []; 
  filteredBooks: any[] = [];  

  constructor(
    private bookService: BookService,
    private searchService: SearchService
  ) {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getAllBooks().subscribe(
      (data) => {
        this.books = data;
        this.filteredBooks = data;
      },
      (error) => {
        console.error('Erro ao buscar os livros:', error);
      }
    );
  }

  onSearch(searchTerm: string): void {
    if (searchTerm) {
      this.searchService.search(searchTerm).subscribe(
        (results) => {
          console.log('Search results:', results); // Verifique os resultados retornados
          this.filteredBooks = results;
        },
        (error) => {
          console.error('Erro ao buscar:', error);
        }
      );
    } else {
      this.filteredBooks = this.books;
    }
  }
  
}
