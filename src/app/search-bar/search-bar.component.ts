import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  searchTerm: string = ''; 

  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  onSearchClick(): void {
    this.search.emit(this.searchTerm); 
  }
}
