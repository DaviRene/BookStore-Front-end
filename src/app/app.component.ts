import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./layout/header/header.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { BookComponent } from './book/book.component';
import { BookService } from './services/Book.service';
import { SearchService } from './services/search.service';
import { GenreSearchComponent } from "./genre-search/genre-search.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, BookComponent, GenreSearchComponent],
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
  
  updateBooks(genreSearchComponent: any[]): void {
    this.filteredBooks = genreSearchComponent;  // Atualiza a lista de livros com os dados recebidos
  }
  
}
