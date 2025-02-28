import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { DatatableComponent } from '../../shared/datatable/datatable.component';
@Component({
  selector: 'app-reporting',
  standalone: true,
  imports: [HeaderComponent,DatatableComponent],
  templateUrl: './reporting.component.html',
  styleUrl: './reporting.component.css'
})
export class ReportingComponent {
  data = Array.from({ length: 20 }, (_, i) => {
    let row: any = { id: i + 1 };
    for (let j = 1; j <= 29; j++) {
      row[`col${j}`] = `Data ${i + 1}-${j}`;
    }
    return row;
  });

  cols = Array.from({ length: 29 }, (_, i) => ({
    field: `col${i + 1}`,
    header: `Column ${i + 1}`
  }));
}
