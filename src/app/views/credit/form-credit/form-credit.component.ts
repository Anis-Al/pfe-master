  import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
  import { FormControl, FormGroup } from '@angular/forms';
  import { MenuItem } from 'primeng/api';
  import { ButtonModule } from 'primeng/button';
  import { MenuModule } from 'primeng/menu';
  import { FormInputsCreditComponent } from "./form-inputs-credit/form-inputs-credit.component";
  import { HeaderComponent } from '../../../shared/header/header.component';
  import { HttpClientModule } from '@angular/common/http';
  import { CommonModule } from '@angular/common';
  import { FormInputsCreditService } from '../../../core/services/form-inputs-credit.service';
  import { ProgressSpinnerModule } from 'primeng/progressspinner';

  @Component({
    selector: 'app-modification-credit',
    standalone: true,
    imports: [ButtonModule, MenuModule, FormInputsCreditComponent, HeaderComponent, CommonModule, HttpClientModule,ProgressSpinnerModule],
    providers: [],
    templateUrl: './form-credit.component.html',
    styleUrl: './form-credit.component.css'
  })
  export class FormCreditComponent implements OnInit {
    items: MenuItem[] = [];
    selectedGroup: string = 'Informations Générales';
    formGroup = new FormGroup({}); 
    selectedFields: any[] = [];
    formGroups: any = {}; 
    numContratValue: string = '';
    isLoading: boolean = true;  


    constructor(private fics: FormInputsCreditService, private cdr: ChangeDetectorRef) {}

    ngOnInit(): void {
      this.fics.getFormGroups().subscribe(data => {
        this.formGroups = data;
    
        this.items = Object.keys(this.formGroups).map(group => ({
          label: group, 
          command: () => this.selectGroup(group)
        }));
    
        this.initFormControls();
        
        this.selectGroup(this.selectedGroup);
        this.isLoading = false; // Move it inside the subscribe callback
      });
    }
    

    private initFormControls() {
      for (const groupName in this.formGroups) {
        this.formGroups[groupName].forEach((field: any) => {
          if (!this.formGroup.get(field.name)) {
            this.formGroup.addControl(field.name, new FormControl(''));
          }
        });
      }

      const numContratControl = this.formGroup.get('numContrat');
      if (numContratControl) {
        numContratControl.valueChanges.subscribe(value => {
          this.numContratValue = value || '';
          this.cdr.detectChanges();
        });
      }
      console.log(this.formGroup.controls);
    }

    selectGroup(groupName: string) {
      this.selectedGroup = groupName;
      this.selectedFields = this.formGroups[groupName] || [];
      this.cdr.detectChanges(); 
    }
  }
