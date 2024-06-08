import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarSoldPageComponent } from './car-sold-page.component';

describe('CarSoldPageComponent', () => {
  let component: CarSoldPageComponent;
  let fixture: ComponentFixture<CarSoldPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarSoldPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarSoldPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
