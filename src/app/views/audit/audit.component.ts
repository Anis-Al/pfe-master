
import { Component, } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { DatatableComponent } from '../../shared/datatable/datatable.component';

@Component({
  selector: 'app-audit',
  standalone: true,
  imports: [HeaderComponent,DatatableComponent],
  templateUrl: './audit.component.html',
  styleUrl: './audit.component.css'
})
export class AuditComponent   {
  columns = [
    { field: 'utilisateur', header: 'Utilisateur' },
    { field: 'operation', header: 'Operation' },
    { field: 'operationnel', header: 'Operationnel' },
    { field: 'dh', header: 'D/H' ,date:true}
  ];

  tableData = [
    { utilisateur: 'John Doe', operation: 'Validation', operationnel: 'Oui', dh: '2024-02-27 10:30' },
    { utilisateur: 'Jane Smith', operation: 'Correction', operationnel: 'Non', dh: '2024-02-27 11:00' },
    { utilisateur: 'Alice Brown', operation: 'Intégration', operationnel: 'Oui', dh: '2024-02-27 12:15' },
    { utilisateur: 'Bob White', operation: 'Audit', operationnel: 'Non', dh: '2024-02-27 14:00' },
    { utilisateur: 'Charlie Black', operation: 'Consultation', operationnel: 'Oui', dh: '2024-02-27 15:45' }
  ];
  

}
