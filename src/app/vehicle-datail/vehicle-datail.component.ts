import { VehicleService } from './../services/vehicle.service';
import { Vehicle } from './../model/Vehicle';
import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { RouterModule, RouterLink, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vehicle-datail',
  standalone: true,
  imports: [
    MenuComponent,
    RouterModule,
    RouterLink,
    CommonModule,
  ],
  templateUrl: './vehicle-datail.component.html',
  styleUrl: './vehicle-datail.component.css'
})
export class VehicleDatailComponent {
  vehicle: Vehicle;
  arrayVehicles: Vehicle[];

  constructor(
    private route: ActivatedRoute,
    private  vehicleService: VehicleService
  ){
    this.arrayVehicles = this.vehicleService.getVehicles();
    let id: number = this.route.snapshot.params['id']!;
    if (this.arrayVehicles.length == 0) {
      console.log('Não encontramos o veículo!!');
    }
    this.vehicle = this.arrayVehicles[id];
  }

  // TODO Lógica para edição das Informações

  // TODO Mensagem de Sucesso-
}
