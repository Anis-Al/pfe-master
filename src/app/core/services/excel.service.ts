import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface ErreursExcelDTO {
  [key: string]: any;
}


@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  apiChargement:string='';
  apiValidation:string='';
  apiErreurs:string='';
  constructor(private http:HttpClient ) { }
  
  chargementFichierExcel(file: File): Observable<{ idExcel: number }> {
    const formData = new FormData();
    formData.append("file", file);

    return this.http.post<{ idExcel: number }>(
      this.apiChargement,
      formData
    );
    this.validerFichier()
  }

  validerFichier(): Observable<{ lignesFausses: any[] }> {
    return this.http.post<{ lignesFausses: any[] }>(
      this.apiValidation,
      { id:this.apiValidation }
    );
  }
  getErreurs():Observable<ErreursExcelDTO>{
    return this.http.get<ErreursExcelDTO>(
      this.apiErreurs
    );  
  }
  
}
