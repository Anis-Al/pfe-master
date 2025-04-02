import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CreditService {

  constructor(private http: HttpClient) {}
  private urlApiCredits:any='';
  
  getCreditParId(data:any):Observable<any>{
    return this.http.get<any>(`${this.urlApiCredits}/${data.numContratCredit}`, data);

  }

  getListeCredits(): Observable<any> {
    return this.http.get<any>(`${this.urlApiCredits}/liste` );
  }

  modifierCredit(data: any): Observable<any> {
    return this.http.put<any>(`${this.urlApiCredits}/${data.numContratCredit}`, data);
  }
  supprimerCredit(data: any): Observable<any> {
    return this.http.delete<any>(`${this.urlApiCredits}/${data.numContratCredit}`, data);
  }

}
