import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-form-inputs-credit',
  standalone: true,
  imports:[ReactiveFormsModule,CommonModule],
  templateUrl: './form-inputs-credit.component.html',
  styleUrl: './form-inputs-credit.component.css'
})
export class FormInputsCreditComponent {
  @Input() formGroup!: FormGroup;
  @Input() fields: { name: string; label: string; type: string; options?: { label: string; value: string }[] }[] = [];
  getColumnClass(fieldCount: number): string {
    if (fieldCount <= 3) {
      return 'grid-1';
    } else if (fieldCount > 3 && fieldCount < 6) {
      return 'grid-2';
    } else {
      return 'grid-3';
    }
  }
  
}
