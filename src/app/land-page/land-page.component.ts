import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-land-page',
  standalone: true,
  imports: [
    MenuComponent,
    FooterComponent,
    RouterLink,
  ],
  templateUrl: './land-page.component.html',
  styleUrl: './land-page.component.css'
})
export class LandPageComponent {

}
