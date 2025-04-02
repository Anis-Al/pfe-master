import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'acceuil',
        loadComponent: () => import('./views/accueil/accueil.component').then(m => m.AccueilComponent)
    },
    {
        path: 'login',
        loadComponent: () => import('./views/login/login.component').then(m => m.LoginComponent)
    },
    {
        path: 'audit',
        loadComponent: () => import('./views/audit/audit.component').then(m => m.AuditComponent)
    },
    {
        path: 'users',
        loadComponent: () => import('./views/utilisateurs/utilisateurs.component').then(m => m.UtilisateursComponent)
    },
    {
        path: 'liste-credits',
        loadComponent: () => import('./views/credit/liste-credits/liste-credits.component').then(m => m.ListeCreditsComponent)
    }

    ,
    {
        path:'form-credit',
        loadComponent: () => import('./views/credit/form-credit/form-credit.component').then(m => m.FormCreditComponent)
    }
    ,
    {
        path:'liste-excels',
        loadComponent: () => import('./views/excel/liste-fichiers/liste-fichiers.component').then(m => m.ListeFichiersComponent)
    }
    ,
    {
        path:'chargement-excel',
        loadComponent: () => import('./views/excel/Integration-fichier/chargement-fichier-excel/chargement-fichier-excel.component').then(m => m.ChargementFichierExcelComponent)
    }
    ,
    {
        path:'validation-excel',
        loadComponent: () => import('./views/excel/Integration-fichier/validation-fichier-excel/validation-fichier-excel.component').then(m => m.ValidationFichierExcelComponent)
    }
];
