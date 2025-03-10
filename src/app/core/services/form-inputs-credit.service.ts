import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormInputsCreditService {
  private jsonUrl = "../../../assets/fichiers/FormInputsCredit.json"; 

  constructor(private http: HttpClient) {}

  getFormGroups(): Observable<any> {
    return this.http.get(this.jsonUrl);
  }
}
