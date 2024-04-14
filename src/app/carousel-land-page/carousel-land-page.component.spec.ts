import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselLandPageComponent } from './carousel-land-page.component';

describe('CarouselLandPageComponent', () => {
  let component: CarouselLandPageComponent;
  let fixture: ComponentFixture<CarouselLandPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselLandPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarouselLandPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
