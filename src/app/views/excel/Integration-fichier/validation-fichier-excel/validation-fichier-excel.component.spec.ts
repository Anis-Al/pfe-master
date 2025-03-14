import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationFichierExcelComponent } from './validation-fichier-excel.component';

describe('ValidationFichierExcelComponent', () => {
  let component: ValidationFichierExcelComponent;
  let fixture: ComponentFixture<ValidationFichierExcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidationFichierExcelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidationFichierExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
