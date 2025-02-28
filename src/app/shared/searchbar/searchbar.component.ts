import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';


@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [FormsModule,InputTextModule,FloatLabel],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent {
  resultat:string|undefined;

}
