import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddCarComponent } from './form-add-car.component';

describe('FormAddCarComponent', () => {
  let component: FormAddCarComponent;
  let fixture: ComponentFixture<FormAddCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormAddCarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormAddCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
