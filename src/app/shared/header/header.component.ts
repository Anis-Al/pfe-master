import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCog,faEye,faPencil,faList, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router'; // ✅ Import RouterModule


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule,RouterModule], // ✅ Add RouterModule to the imports array
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  faSignOut = faSignOutAlt; 
  faPencil = faPencil;
  faList = faList;
  faEye = faEye;
  faCog = faCog;
 

  logout() {
    console.log('Logging out...');
    // Add your logout logic here
  }
}
