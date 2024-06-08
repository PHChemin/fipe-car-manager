import { Vehicle } from './../model/Vehicle';
import { Component, OnInit, afterNextRender } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../menu/menu.component';
import { VehicleService } from '../services/vehicle.service';
import { Constants } from '../util/constants';

@Component({
  selector: 'app-car-sold-page',
  standalone: true,
  imports: [
    CommonModule,
    MenuComponent,
  ],
  templateUrl: './car-sold-page.component.html',
  styleUrl: './car-sold-page.component.css'
})
export class CarSoldPageComponent implements OnInit{
  vehicles: Vehicle[] = [];
  userId!: number;

  constructor(private vehicleService: VehicleService){
    afterNextRender(() => {
      this.userId = JSON.parse(localStorage.getItem(Constants.USERID_KEY)!);
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.vehicleService.getSoldVehicles(this.userId).subscribe(
        {
          next: (data) => {
            this.vehicles = data;
            console.log(data);
          },
          error: (error) => {
            console.error(error);
          }
        }
      );
    });
  }
}
