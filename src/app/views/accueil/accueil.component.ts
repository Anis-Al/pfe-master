import { Component,OnInit } from '@angular/core';
import {CardModule} from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CardModule,ButtonModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {
  
 
}
