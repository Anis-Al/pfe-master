import { Component,OnInit } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent implements OnInit{
  matricule:string='';
   url = '../../../assets/files/guide.pdf'; // Replace with your PDF file URL

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
