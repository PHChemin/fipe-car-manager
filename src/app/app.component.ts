import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MenuComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fipe-car-manager';
}
