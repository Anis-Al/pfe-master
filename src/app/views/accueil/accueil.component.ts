import { Component,OnInit } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { ActivatedRoute } from '@angular/router';
import {CardModule} from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [HeaderComponent,CardModule,ButtonModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent implements OnInit{
  matricule:string='';
   url = '../../../assets/fichiers/guide.pdf'; // Replace with your PDF file URL

  openPdf() {
    window.open(this.url, '_blank');
  }
  constructor(private ar:ActivatedRoute){}
  ngOnInit(){
    this.ar.queryParams.subscribe(params => {
      this.matricule = params['matricule'];
    });
  }
}
