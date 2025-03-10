import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationCreditComponent } from './modification-credit.component';

describe('ModificationCreditComponent', () => {
  let component: ModificationCreditComponent;
  let fixture: ComponentFixture<ModificationCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModificationCreditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificationCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
