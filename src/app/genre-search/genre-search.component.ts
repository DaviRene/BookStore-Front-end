import { Component } from '@angular/core';
import { NgIf,NgFor } from '@angular/common';
import { GenreService } from '../services/genre.service';
import { GenreSearchService } from '../services/genre-search.service';
import { BookComponent } from "../book/book.component";
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-genre-search',
  standalone: true,
  imports: [NgIf, NgFor, BookComponent],
  templateUrl: './genre-search.component.html',
  styleUrl: './genre-search.component.scss'
})
export class GenreSearchComponent {
  genres: string[] = [];
  books: any[] = [];

  @Output() booksFound = new EventEmitter<any[]>();

  constructor(private genreService: GenreService, private genreSearchService: GenreSearchService) {}

  ngOnInit(): void {
    this.loadGenres();
  }

  
  loadGenres(): void {
    this.genreService.getGenres().subscribe(
      (response) => {
        this.genres = response;
      },
      (error) => {
        console.error('Erro ao carregar gêneros:', error);
      }
    );
  }


 

  fetchBooksByGenre(genre: string): void {
    this.genreSearchService.fetchBooksByGenre(genre).subscribe(
      (response: any) => {
        this.booksFound.emit(response);
      },
      (error) => {
        console.error('Erro ao buscar livros por gênero:', error);
      }
    );
  }
}
