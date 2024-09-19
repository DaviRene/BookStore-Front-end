import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  searchTerm: string = ''; 

  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  onSearchClick(): void {
    this.search.emit(this.searchTerm); 
  }
}
