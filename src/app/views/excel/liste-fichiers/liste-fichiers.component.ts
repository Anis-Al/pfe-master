import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/header/header.component';
import { DatatableComponent } from '../../../shared/datatable/datatable.component';
import { SearchbarComponent } from '../../../shared/searchbar/searchbar.component';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-integration-excel',
  standalone: true,
  imports: [HeaderComponent,DatatableComponent,SearchbarComponent,ButtonModule],
  templateUrl: './liste-fichiers.component.html',
  styleUrl: './liste-fichiers.component.css',
})
export class ListeFichiersComponent {
  constructor(private router:Router) { }
  colonnes = [
    { field: 'nom_fichier', header: 'Nom du fichier' },
    { field: 'nombre_des_credits', header: 'Nombre des crédits' },
    { field: 'statut', header: 'Statut' }
  ];

  lignes = [
    { nom_fichier: 'clients_01.xlsx', nombre_des_credits: 45, statut: 'Validé' },
    { nom_fichier: 'loans_march.xlsx', nombre_des_credits: 78, statut: 'Intégré' },
    { nom_fichier: 'transactions_2024.xlsx', nombre_des_credits: 23, statut: 'XML généré' },
    { nom_fichier: 'data_export.xlsx', nombre_des_credits: 56, statut: 'Validé' },
    { nom_fichier: 'report_2024.xlsx', nombre_des_credits: 88, statut: 'Intégré' },
    { nom_fichier: 'operations.xlsx', nombre_des_credits: 12, statut: 'XML généré' },
    { nom_fichier: 'banking_data.xlsx', nombre_des_credits: 67, statut: 'Validé' },
    { nom_fichier: 'loan_requests.xlsx', nombre_des_credits: 31, statut: 'Intégré' },
    { nom_fichier: 'payments.xlsx', nombre_des_credits: 99, statut: 'XML généré' },
    { nom_fichier: 'march_updates.xlsx', nombre_des_credits: 47, statut: 'Validé' },
    { nom_fichier: 'audit_2023.xlsx', nombre_des_credits: 84, statut: 'Intégré' },
    { nom_fichier: 'export_2025.xlsx', nombre_des_credits: 22, statut: 'XML généré' },
    { nom_fichier: 'monthly_stats.xlsx', nombre_des_credits: 34, statut: 'Validé' },
    { nom_fichier: 'yearly_report.xlsx', nombre_des_credits: 61, statut: 'Intégré' },
    { nom_fichier: 'financial_summary.xlsx', nombre_des_credits: 18, statut: 'XML généré' },
    { nom_fichier: 'user_data.xlsx', nombre_des_credits: 29, statut: 'Validé' },
    { nom_fichier: 'client_info.xlsx', nombre_des_credits: 76, statut: 'Intégré' },
    { nom_fichier: 'loan_details.xlsx', nombre_des_credits: 39, statut: 'XML généré' },
    { nom_fichier: 'transactions_summary.xlsx', nombre_des_credits: 92, statut: 'Validé' },
    { nom_fichier: 'report_Q1.xlsx', nombre_des_credits: 55, statut: 'Intégré' }
  ];
  badge='statut';

    public ChargementExcel(){
      this.router.navigate(['/ChargementExcel']);
    }

}
