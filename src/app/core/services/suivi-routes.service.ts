import { Injectable, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { filter, map, startWith, takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SuiviRoutesService implements OnDestroy {
  private destroy$ = new Subject<void>(); 
  private routeActuelle = new BehaviorSubject<string>('');  
  routeActuelle$: Observable<string> = this.routeActuelle.asObservable();

  private titres: { [key: string]: string } = {
    '/liste-credits': 'Liste des Crédits',
    '/users': 'Gestion des Utilisateurs',
    '/audit': 'Audit',
    '/acceuil': 'Acceuil',
    '/form-credit': 'Formulaire du Crédit',
    '/liste-excels': 'Liste des fichiers Excel',
    '/validation-excel':'Validation du fichier Excel'
  };

  constructor(private router: Router) {
    this.routeActuelle.next(this.router.url); 

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      takeUntil(this.destroy$) 
    ).subscribe((event: NavigationEnd) => {
      const cleanUrl = event.urlAfterRedirects.split('?')[0]; 
      this.routeActuelle.next(cleanUrl);
    });
  }

  titrePage$: Observable<string> = this.routeActuelle$.pipe(
    map(route => this.titres[route] || '')
  );

  afficherActions$: Observable<boolean> = this.routeActuelle$.pipe(
    map(route => ['/liste-credits', '/users'].some(chemin => route.includes(chemin)))
  );

  montrerHeader$: Observable<boolean> = this.routeActuelle$.pipe(
    startWith(window.location.pathname), 
    map(route => route !== '/login')  
  );

  getRouteActuelle():string{
    return this.routeActuelle.value;
  }
  ngOnDestroy() {
    this.destroy$.next(); 
    this.destroy$.complete(); 
  }
}
