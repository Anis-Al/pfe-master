import { CommonModule } from '@angular/common';
import { Component,Input, OnInit  } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { BadgeModule } from 'primeng/badge';
import { SuiviRoutesService } from '../../core/services/suivi-routes.service';


@Component({
  selector: 'app-datatable',
  standalone: true,
  imports: [TableModule,CommonModule,ButtonModule,RippleModule,BadgeModule],
  providers:[SuiviRoutesService],
  templateUrl: './datatable.component.html',
  styleUrl: './datatable.component.css'
})
export class DatatableComponent implements OnInit   {

@Input() data:any[]=[];
@Input() cols:any[]=[];
@Input() source:string='';
@Input() estStatique:boolean=false;
@Input() badge:string='';
@Input() stylePerso?: { [key: string]: string };
styleBase: { [key: string]: string } = { 'min-width': '1200px'};

constructor(public srs:SuiviRoutesService){}
ngOnInit():void{
  const routeActuelle=this.srs.routeActuelle$;
}

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
get computedStyle(): { [key: string]: string } {
  return this.stylePerso
    ? Object.fromEntries(Object.entries(this.stylePerso).map(([k, v]) => [k, v + ' !important']))
    : this.styleBase;
}
getRoute():string{
  console.log(this.srs.getRouteActuelle());
  return this.srs.getRouteActuelle();
}


}
