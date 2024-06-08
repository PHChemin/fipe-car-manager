import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleDatailComponent } from './vehicle-datail.component';

describe('VehicleDatailComponent', () => {
  let component: VehicleDatailComponent;
  let fixture: ComponentFixture<VehicleDatailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleDatailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VehicleDatailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
