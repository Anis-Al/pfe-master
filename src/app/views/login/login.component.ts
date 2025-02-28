import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,InputTextModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  matricule:string = "";
  motdepasse:string = "";

  constructor( private router:Router ) { }

  login(){    
      if (this.matricule && this.motdepasse)
      {
        this.router.navigate(['/acceuil'], { queryParams: { matricule: this.matricule } });
      } 
      else
      {
        console.error("faut les deux ya bghel.");
      }
    }
  }

