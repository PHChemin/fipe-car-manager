import { Component } from '@angular/core';
import { CarouselLandPageComponent } from '../carousel-land-page/carousel-land-page.component';

@Component({
  selector: 'app-land-page',
  standalone: true,
  imports: [
    CarouselLandPageComponent
  ],
  templateUrl: './land-page.component.html',
  styleUrl: './land-page.component.css'
})
export class LandPageComponent {

}
