import { Component,OnInit } from '@angular/core';
import { ExcelService } from '../../../../core/services/excel.service';
import { HeaderComponent } from '../../../../shared/header/header.component';

@Component({
  selector: 'app-validation-fichier-excel',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './validation-fichier-excel.component.html',
  styleUrl: './validation-fichier-excel.component.css',
  providers:[ExcelService]
})
export class ValidationFichierExcelComponent implements OnInit {
  correctRows: any[] = [];
  incorrectRows: any[] = [];
  columnHeaders:any[]=[];
  constructor(private ex:ExcelService) { }
  ngOnInit(): void {
      this.ex.validerFichier().subscribe(response => {
        this.columnHeaders = response.columnHeaders;

        this.correctRows = response.correctRows;
        this.incorrectRows = response.incorrectRows;
      });
    }
  }


