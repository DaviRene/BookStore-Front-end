import { Component, Input } from '@angular/core';
import { BookService } from '../services/Book.service';
import { NgFor, NgIf } from '@angular/common';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {
  
  @Input() books: any[] = [];  
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
        this.filteredBooks = data; // Inicialmente, a tabela mostra todos os livros
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
          this.filteredBooks = results; // Atualiza a tabela com os resultados da busca
        },
        (error) => {
          console.error('Erro ao buscar:', error);
        }
      );
    } else {
      this.filteredBooks = this.books; // Restaura todos os livros quando o termo de busca está vazio
    }
  }
}