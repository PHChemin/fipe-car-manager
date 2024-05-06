import { VehicleService } from './../services/vehicle.service';
import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { Vehicle } from '../model/Vehicle';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink } from '@angular/router';

@Component({
  selector: 'app-my-vehicle-page',
  standalone: true,
  imports: [
    MenuComponent,
    CommonModule,
    RouterModule,
    RouterLink,
  ],
  templateUrl: './my-vehicle-page.component.html',
  styleUrl: './my-vehicle-page.component.css'
})
export class MyVehiclePageComponent {
  vehicles: Vehicle[];

  constructor(private vehicleService: VehicleService){
    this.vehicles = vehicleService.getVehicles();
  }

  // TODO Botão de Vender e Lógica
}
