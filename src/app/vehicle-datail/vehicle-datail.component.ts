import { VehicleService } from './../services/vehicle.service';
import { Vehicle } from './../model/Vehicle';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { RouterModule, RouterLink, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';

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
export class VehicleDatailComponent implements OnInit{
  vehicle: Vehicle | undefined = undefined;
  vehicleId!: number;

  constructor(
    private route: ActivatedRoute,
    private  vehicleService: VehicleService
  ){
    
  }

  ngOnInit(): void {
    this.vehicleId = this.route.snapshot.params['id']!;

    setTimeout(() => {
      this.vehicleService.getVehicleById(this.vehicleId).subscribe
      (
        {
          next: (data) => {
            this.vehicle = data[0];
          },
          error: (error) => {
            console.error(error);
            this.vehicle = undefined;
          }
        }
      );
    });
  }


  // TODO Lógica para edição das Informações

  // TODO Mensagem de Sucesso-
}
