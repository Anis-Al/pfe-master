import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IconField } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';


@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [FormsModule,InputTextModule,IconField],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})  
export class SearchbarComponent {
  elementRecherche: string = '';

  @Output() emetteur: EventEmitter<string> = new EventEmitter<string>();

  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.emetteur.emit(this.elementRecherche); 
    }
  }
}
