import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { BadgeModule } from 'primeng/badge';


@Component({
  selector: 'app-datatable',
  standalone: true,
  imports: [TableModule,CommonModule,ButtonModule,RippleModule,BadgeModule],
  templateUrl: './datatable.component.html',
  styleUrl: './datatable.component.css'
})
export class DatatableComponent {

@Input() data:any[]=[];
@Input() cols:any[]=[];
@Input() source:string='';
@Input() estStatique:boolean=false;
@Input() badge:string='';

editUser(user: any) {
  console.log('Editing user:', user);

}

deleteUser(user: any) {
  console.log('Deleting user:', user);
}

getBadgeSeverity(status: string): any {
  switch (status) {
    case 'Validé': return 'danger'; // Green
    case 'Intégré': return 'info'; // Blue
    case 'XML généré': return 'warning'; // Yellow
    default: return 'secondary'; // Gray
  }
}


}
