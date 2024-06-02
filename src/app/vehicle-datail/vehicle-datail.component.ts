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
export class VehicleDatailComponent implements OnInit, OnDestroy{
  vehicle: Vehicle | undefined = undefined;
  vehicleId: number;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private  vehicleService: VehicleService
  ){
    this.vehicleId = this.route.snapshot.params['id']!;
    console.log(this.vehicleId);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.vehicleService.getVehicleById(this.vehicleId).pipe(
        takeUntil(this.unsubscribe$)
      ).subscribe(
        {
          next: (data) => {
            this.vehicle = data[0];
            console.log(this.vehicle);
          },
          error: (error) => {
            console.error(error);
            this.vehicle = undefined;
          }
        }
      );
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  // TODO Lógica para edição das Informações

  // TODO Mensagem de Sucesso-
}
