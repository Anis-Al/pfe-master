import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import * as XLSX from 'xlsx';


@Injectable({
  providedIn: 'root'
})
export class ExcelService {
  apiChargement:string='';
  apiValidation:string='';
  // nomFichier:string='';
  // dataFichier:any[]=[];
  
  private repertoireFichier: string = '';

  constructor(private http:HttpClient ) { }
  
  setRepertoireFichier(path: string) {
      this.repertoireFichier = path;
    }

  getRepertoireFichier(): string {
    return this.repertoireFichier;
  }
  

  envoyerFichier(file: File): Observable<{ filePath: string }> {
    const formData = new FormData();
    formData.append("file", file);

    return this.http.post<{ filePath: string }>(
      this.apiChargement,
      formData
    );
  }

  validerFichier(): Observable<{ columnHeaders:any[],correctRows: any[], incorrectRows: any[] }> {
    return this.http.post<{ columnHeaders:any[],correctRows: any[], incorrectRows: any[] }>(
      this.apiValidation,
      { filePath: this.repertoireFichier }
    );
  }

  // traitementFichier(fichier: File): Observable<boolean> {
  //   return new Observable(observer => {
  //     this.nomFichier = fichier.name;
  //     const reader = new FileReader();
  //     reader.onload = (e: any) => {
  //       const data = new Uint8Array(e.target.result);
  //       const workbook = XLSX.read(data, { type: 'array' });

  //       const sheetName = workbook.SheetNames[0];
  //       const sheet = workbook.Sheets[sheetName];

  //       this.dataFichier = XLSX.utils.sheet_to_json(sheet); 
  //       console.log('NomFichier :',this.nomFichier);
  //       console.log('📂 Données extraites:', this.dataFichier); 
  //       observer.next(true);
  //       observer.complete();
  //     };

  //     reader.onerror = () => {
  //       observer.error('Erreur lors de la lecture du fichier.');
  //     };

  //     reader.readAsArrayBuffer(fichier);
  //   });
  // }

  // chargerDataExcel(): Observable<any> {
  //   if (!this.nomFichier || this.dataFichier.length === 0) {
  //     return new Observable(observer => {
  //       observer.error('Aucune donnée à envoyer.');
  //     });
  //   }

  //   return this.http.post(this.urlApi, { nomFichierExcel: this.nomFichier, dataFichierExcel: this.dataFichier });
  // }
  // getDataFichier():any {
  //   return this.dataFichier;
  // }
  
}
