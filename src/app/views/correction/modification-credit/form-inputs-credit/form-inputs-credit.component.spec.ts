import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputsCreditComponent } from './form-inputs-credit.component';

describe('FormInputsCreditComponent', () => {
  let component: FormInputsCreditComponent;
  let fixture: ComponentFixture<FormInputsCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormInputsCreditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormInputsCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
