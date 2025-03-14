import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeFichiersComponent } from './liste-fichiers.component';

describe('ListeFichiersComponent', () => {
  let component: ListeFichiersComponent;
  let fixture: ComponentFixture<ListeFichiersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeFichiersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeFichiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
