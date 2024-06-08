import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVehiclePageComponent } from './add-vehicle-page.component';

describe('AddVehiclePageComponent', () => {
  let component: AddVehiclePageComponent;
  let fixture: ComponentFixture<AddVehiclePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddVehiclePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddVehiclePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
