import { Component,OnDestroy } from '@angular/core';
import { filter, Observable } from 'rxjs';
import { SuiviRoutesService } from './core/services/suivi-routes.service';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-root',
  standalone:true,
  imports:[RouterOutlet,HeaderComponent,CommonModule,ProgressSpinnerModule],

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy  {
  montrerHeader$!: Observable<boolean>;
  titrePage$!: Observable<string>;
  afficherActions$!: Observable<boolean>;
  isLoading: boolean = true;
  private body = document.body;



  constructor(private suiviRoutesService: SuiviRoutesService,private router: Router) {
    this.montrerHeader$ = this.suiviRoutesService.montrerHeader$;
    this.titrePage$ = this.suiviRoutesService.titrePage$;
    
    this.afficherActions$ = this.suiviRoutesService.afficherActions$;
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.isLoading = true; 
      setTimeout(() => {
        this.isLoading = false; 
      }, 400);
    });
  }
  ngOnDestroy() {
    this.body.classList.remove('acceuil-mode');
  }
  
}
