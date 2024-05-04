import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddVehiclePageComponent } from './add-vehicle-page/add-vehicle-page.component';
import { RegisterComponent } from './register/register.component';
import { LandPageComponent } from './land-page/land-page.component';
import { MyVehiclePageComponent } from './my-vehicle-page/my-vehicle-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RegisterComponent,
    LandPageComponent,
    AddVehiclePageComponent,
    MyVehiclePageComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fipe-car-manager';
}
