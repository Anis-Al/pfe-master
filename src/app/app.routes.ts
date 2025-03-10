import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'acceuil',
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
        path: 'reporting',
        loadComponent: () => import('./views/reporting/reporting.component').then(m => m.ReportingComponent)
    }

    ,
    {
        path:'FormCredit',
        loadComponent: () => import('./views/correction/modification-credit/modification-credit.component').then(m => m.ModificationCreditComponent)
    }
    ,
    {
        path:'ListeExcel',
        loadComponent: () => import('./views/correction/integration-excel/integration-excel.component').then(m => m.IntegrationExcelComponent)
    }
    ,
    {
        path:'ChargementExcel',
        loadComponent: () => import('./views/excel/chargement-fichier-excel/chargement-fichier-excel.component').then(m => m.ChargementFichierExcelComponent)
    }
];
