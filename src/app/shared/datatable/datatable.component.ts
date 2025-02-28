import { CommonModule } from '@angular/common';
import { Component,input,Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';


@Component({
  selector: 'app-datatable',
  standalone: true,
  imports: [TableModule,CommonModule,ButtonModule,RippleModule],
  templateUrl: './datatable.component.html',
  styleUrl: './datatable.component.css'
})
export class DatatableComponent {
@Input() data:any[]=[];
@Input() cols:any[]=[];
@Input() source:string='';
@Input() estStatique:boolean=false;

editUser(user: any) {
  console.log('Editing user:', user);

}

deleteUser(user: any) {
  console.log('Deleting user:', user);
}


}
