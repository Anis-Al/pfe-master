import { Component,OnInit, ViewChild } from '@angular/core';
import { ExcelService } from '../../../../core/services/excel.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';




@Component({
  selector: 'app-chargement-fichier-excel',
  standalone: true,
  imports: [ToastModule],
  templateUrl: './chargement-fichier-excel.component.html',
  styleUrl: './chargement-fichier-excel.component.css',
  providers: [ExcelService,MessageService]
})
export class ChargementFichierExcelComponent implements OnInit {
  @ViewChild('FileInput') fileInput: any;
  dataExcel:any[]=[];

  constructor(private ex:ExcelService,private router:Router){}
  fichierSelectionne!: File;


  ngOnInit(): void {
    setTimeout(() => {
      this.fileInput.nativeElement.click();
    }, 0);
  } 
  chargerExcel(event: any) {
    this.fichierSelectionne = event.target.files[0];
    // this.ex.envoyerFichier(this.fichierSelectionne).subscribe(response => {
    //   // this.ex.setRepertoireFichier(response.filePath);
    //   // console.log("File uploaded, path saved:", response.filePath);
    // });
    console.log(this.fichierSelectionne)
    this.router.navigate(['/validation-excel']); 

  }
  
}
