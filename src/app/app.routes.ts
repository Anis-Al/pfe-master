import { Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { AccueilComponent } from './views/accueil/accueil.component';
import { AuditComponent } from './views/audit/audit.component';
import { UtilisateursComponent } from './views/utilisateurs/utilisateurs.component';
import { ReportingComponent } from './views/reporting/reporting.component';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'acceuil',
        pathMatch:'full',
        component: AccueilComponent
    },
   
    {
        path: 'login',
        pathMatch: 'full',
        component: LoginComponent
    },
    {
        path:'audit',
        pathMatch:'full',
        component:AuditComponent
    }
    ,
    {
        path:'users',
        pathMatch:'full',
        component:UtilisateursComponent
    },
    {
        path: 'reporting',
        pathMatch: 'full',
        component: ReportingComponent   

    }
];
