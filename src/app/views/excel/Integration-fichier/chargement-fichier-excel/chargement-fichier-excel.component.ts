import { Component,OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from '../../../../shared/header/header.component';
import { ExcelService } from '../../../../core/services/excel.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-chargement-fichier-excel',
  standalone: true,
  imports: [HeaderComponent,ToastModule,HttpClientModule],
  templateUrl: './chargement-fichier-excel.component.html',
  styleUrl: './chargement-fichier-excel.component.css',
  providers: [ExcelService,MessageService]
})
export class ChargementFichierExcelComponent implements OnInit {
  @ViewChild('FileInput') fileInput: any;
  dataExcel:any[]=[];

  constructor(private ex:ExcelService,private ms:MessageService){}
  fichierSelectionne!: File;


  ngOnInit(): void {
    setTimeout(() => {
      this.fileInput.nativeElement.click();
    }, 0);
  } 
  chargerExcel(event: any) {
    this.fichierSelectionne = event.target.files[0];
    this.ex.envoyerFichier(this.fichierSelectionne).subscribe(response => {
      this.ex.setRepertoireFichier(response.filePath);
      console.log("File uploaded, path saved:", response.filePath);
    });

  }
  // chargerExcel(event: Event) {
  //   const input = event.target as HTMLInputElement;
  //   if (input.files && input.files.length > 0) {
  //     const fichier = input.files[0];

  //     this.exservice.traitementFichier(fichier).subscribe({
  //       next: () => {
  //         this.dataExcel = this.exservice.getDataFichier(); 
  //       },
  //       error: (err) => {
  //         console.error('❌ Error:', err);
  //         this.ms.add({
  //           severity: 'warn',
  //           summary: 'Format invalide',
  //           detail: err
  //         });
  //       }
  //     });
  //   }
  // }
}
