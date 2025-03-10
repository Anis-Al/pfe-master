import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { faCog,faEye,faPencil,faList, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { RouterModule,ActivatedRoute } from '@angular/router'; // ✅ Import RouterModule
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule,ButtonModule,RouterModule,MenubarModule,MenuModule], // ✅ Add RouterModule to the imports array
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // faSignOut = faSignOutAlt; 
  // faList = faList;
  // faCog = faCog;
  excel_sous_menu = [
    { label: 'Charger un fichier Excel', routerLink: ['/ChargementExcel'] },
    { label: 'Liste des fichiers Excel',  routerLink: ['/ListeExcel'] },
    { label: 'Audit',  routerLink: ['/dashboard/analytics'] }

  ];

  credits_sous_menu = [
    { label: 'Ajouter un crédit',  routerLink: ['/FormCredit'] },
    { label: 'Liste des crédits',  routerLink: ['/reporting'] },
    { label: 'Reporting',routerLink: ['/loans/rejected'] },
    { label: 'Audit',  routerLink: ['/dashboard/analytics'] }

  ];

  declba_sous_menu = [
    { label: 'Génerer un fichier XML',  routerLink: ['/clients/all'] },
    { label: 'Liste des fichiers XML', routerLink: ['/clients/vip'] }
  ];

  logout() {
    console.log('Logging out...');
  }
}
