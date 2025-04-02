import { Component,ChangeDetectionStrategy  } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { Menu, MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import {  RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SuiviRoutesService } from '../../core/services/suivi-routes.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonModule,MenubarModule,MenuModule,TooltipModule,CommonModule,RouterLink], 
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush 


})
export class HeaderComponent {
  
  urlGuidePdf = '../../../assets/fichiers/guide.pdf'; 
  matricule:string='';
  activeRoute$: Observable<string>;



  openPdf() {
    window.open(this.urlGuidePdf, '_blank');
  }
  constructor(public srs:SuiviRoutesService){
    this.activeRoute$ = this.srs.routeActuelle$; // Pas besoin de subscribe()

  }
  

  
  
  // pages et leurs chemins
  // excel_sous_menu = [
  //   { label: 'Charger un fichier Excel', routerLink: ['/chargement-excel'] },
  //   { label: 'Liste des fichiers Excel',  routerLink: ['/liste-excels'] },
  //   { label: 'Audit', routerLink: ['/audit']  }

  // ];  

  // credits_sous_menu = [
  //   { label: 'Ajouter un crédit',  routerLink: ['/form-credit'] },
  //   { label: 'Liste des crédits',  routerLink: ['/liste-credits'] },
  //   { label: 'Reporting',routerLink: ['/loans/rejected'] },
  //   { label: 'Audit',  routerLink: ['/audit'] }

  // ];

  // declba_sous_menu = [
  //   { label: 'Générer un fichier de Déclaration BA ',  routerLink: ['/clients/all'] },
  //   { label: 'Liste des fichiers des Déclarations BA', routerLink: ['/clients/vip'] }
  // ];
  //

  logout() {
    console.log('Logging out...');
  }
}
