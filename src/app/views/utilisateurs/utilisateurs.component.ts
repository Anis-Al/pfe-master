import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { HeaderComponent } from '../../shared/header/header.component';
import { DatatableComponent } from '../../shared/datatable/datatable.component';
import { Router } from '@angular/router';





@Component({
  imports:[TableModule,HeaderComponent,DatatableComponent],
  selector: 'app-utilisateurs',
  standalone: true,
  templateUrl: './utilisateurs.component.html',
  styleUrl: './utilisateurs.component.css'
})
export class UtilisateursComponent implements OnInit {
  constructor(private router: Router) { }
  utilisateurs="utilisateurs";
  currentRoute:string='';
   userColumns = [
    { field: 'user', header: 'User' },
    { field: 'role', header: 'Role' }
  ];
  
   users = [
    { user: 'John Doe', role: 'Admin' },
    { user: 'Jane Smith', role: 'Editor' },
    { user: 'Alice Brown', role: 'Viewer' },
    { user: 'Bob White', role: 'Validator' },
    { user: 'Charlie Black', role: 'DB Integrator' },
    { user: 'Emily Johnson', role: 'Auditor' },
    { user: 'Michael Green', role: 'Supervisor' },
    { user: 'Sarah Blue', role: 'Operator' }
];
ngOnInit() {
  this.currentRoute = this.router.url; // Get current route
}
}
