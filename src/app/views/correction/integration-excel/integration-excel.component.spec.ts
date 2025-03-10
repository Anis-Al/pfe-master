import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationExcelComponent } from './integration-excel.component';

describe('IntegrationExcelComponent', () => {
  let component: IntegrationExcelComponent;
  let fixture: ComponentFixture<IntegrationExcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntegrationExcelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntegrationExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
