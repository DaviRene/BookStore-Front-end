import { Component } from '@angular/core';
import { NgIf,NgFor } from '@angular/common';
import { GenreService } from '../services/genre.service';

@Component({
  selector: 'app-genre-search',
  standalone: true,
  imports: [NgIf,NgFor],
  templateUrl: './genre-search.component.html',
  styleUrl: './genre-search.component.scss'
})
export class GenreSearchComponent {
  genres: string[] = [];
  selectedGenre: string = '';

  constructor(private genreService: GenreService) {}

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
}
