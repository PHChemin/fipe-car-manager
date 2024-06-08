import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [
    MenuComponent,
    RouterLink,
  ],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent {

}
