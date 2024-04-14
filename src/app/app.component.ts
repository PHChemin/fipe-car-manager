import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandPageComponent } from './land-page/land-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LandPageComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fipe-car-manager';
}
