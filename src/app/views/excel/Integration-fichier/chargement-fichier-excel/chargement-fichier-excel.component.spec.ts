import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargementFichierExcelComponent } from './chargement-fichier-excel.component';

describe('ChargementFichierExcelComponent', () => {
  let component: ChargementFichierExcelComponent;
  let fixture: ComponentFixture<ChargementFichierExcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChargementFichierExcelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChargementFichierExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
