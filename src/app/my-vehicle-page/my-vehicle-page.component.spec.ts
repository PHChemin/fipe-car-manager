import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyVehiclePageComponent } from './my-vehicle-page.component';

describe('MyVehiclePageComponent', () => {
  let component: MyVehiclePageComponent;
  let fixture: ComponentFixture<MyVehiclePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyVehiclePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyVehiclePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
