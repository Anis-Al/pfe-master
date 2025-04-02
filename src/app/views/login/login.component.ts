  import { Component,  } from '@angular/core';
  import { Route, Router } from '@angular/router';
  import { FormsModule } from '@angular/forms';
  import { InputTextModule } from 'primeng/inputtext';
  import { ToastModule } from 'primeng/toast';
  import { MessageService } from 'primeng/api';


  @Component({
    selector: 'app-login',
    standalone: true,
    imports: [FormsModule, InputTextModule, ToastModule], 
    providers: [MessageService], 
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
  })
  export class LoginComponent  {
    matricule: string = "";
    motdepasse: string = "";

    constructor( private messageService: MessageService,private router:Router) { }

    
  

    login() {
      if (this.matricule && this.motdepasse) {
        this.router.navigate(['/acceuil'], { queryParams: { matricule: this.matricule } });
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur de connexion',
          detail: 'Veuillez renseigner tous les champs.',
        });
      }
    }
  }