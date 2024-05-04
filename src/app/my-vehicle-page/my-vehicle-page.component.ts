import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-my-vehicle-page',
  standalone: true,
  imports: [
    MenuComponent,
  ],
  templateUrl: './my-vehicle-page.component.html',
  styleUrl: './my-vehicle-page.component.css'
})
export class MyVehiclePageComponent {

}
