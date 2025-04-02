  import { Component ,OnInit} from '@angular/core';
  import { DatatableComponent } from '../../../shared/datatable/datatable.component';
  import { SearchbarComponent } from '../../../shared/searchbar/searchbar.component';
  import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { SuiviRoutesService } from '../../../core/services/suivi-routes.service';


  @Component({
    selector: 'app-reporting',
    standalone: true,
    imports: [DatatableComponent,SearchbarComponent,ButtonModule],
    templateUrl: './liste-credits.component.html',
    styleUrl: './liste-credits.component.css'
  })
  export class ListeCreditsComponent implements OnInit   {
    data = Array.from({ length: 10 }, (_, i) => {
      let row: any = { id: i + 1 };
      for (let j = 1; j <= 29; j++) {
        row[`col${j}`] = `Donnee ${i + 1}-${j}`;
      }
      return row;
    });

    cols = Array.from({ length: 29 }, (_, i) => ({
      field: `col${i + 1}`,
      header: `Colonne ${i + 1}`
    }));
    
    source="reporting";
    estStatique=true;
    constructor(public router:Router,private srs:SuiviRoutesService){}
    ngOnInit() :void{
      const routeActuelle = this.srs.routeActuelle$
      console.log(routeActuelle);
    }
    public redirigerVersFormCredit(){
      this.router.navigate(['/form-credit']);
    }
  }
