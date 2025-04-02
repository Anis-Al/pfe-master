import { Component,OnInit } from '@angular/core';
import { ExcelService } from '../../../../core/services/excel.service';
import { DatatableComponent } from '../../../../shared/datatable/datatable.component';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-validation-fichier-excel',
  standalone: true,
  imports: [DatatableComponent,ButtonModule],
  templateUrl: './validation-fichier-excel.component.html',
  styleUrl: './validation-fichier-excel.component.css',
  providers:[ExcelService]
})
export class ValidationFichierExcelComponent implements OnInit {
  
  style: { [key: string]: string } = { 'width': 'auto' };

  colonnesErreurs = [
    { field: 'numeroLigne', header: 'Ligne' },
    { field: 'messageErreur', header: 'Message d\'erreur' }
  ];
  
  erreurs = [
    { numeroLigne: 2, messageErreur: 'Le montant du prêt est manquant dans la colonne loanAmount' },
    { numeroLigne: 5, messageErreur: 'Le taux d\'intérêt doit être un nombre positif dans la colonne interestRate' },
    { numeroLigne: 8, messageErreur: 'Le nom du client ne peut pas être vide dans la colonne clientName' },
    { numeroLigne: 10, messageErreur: 'Format de date invalide dans la colonne startDate' },
    { numeroLigne: 15, messageErreur: 'La durée du prêt dépasse la limite autorisée dans la colonne loanTerm' }
  ];
  

  
  constructor(private ex:ExcelService) { }
  ngOnInit(): void {
     
    }
  }


