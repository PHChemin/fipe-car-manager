import { VehicleService } from './../services/vehicle.service';
import { Component, OnDestroy, OnInit, afterNextRender } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { Constants } from '../util/constants';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink } from '@angular/router';
import { Vehicle } from '../model/Vehicle';
import { Subject, takeUntil } from 'rxjs';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-my-vehicle-page',
  standalone: true,
  imports: [
    MenuComponent,
    CommonModule,
    RouterModule,
    RouterLink,
    FormsModule,
  ],
  templateUrl: './my-vehicle-page.component.html',
  styleUrl: './my-vehicle-page.component.css'
})
export class MyVehiclePageComponent implements OnInit, OnDestroy {
  userId!: number;
  vehicles: Vehicle[] = [];
  private unsubscribe$ = new Subject<void>();
  saleDate: Date | undefined;
  salePrice!: number;
  selectedVehicle!: Vehicle;
  message: string = '';

  constructor(private vehicleService: VehicleService){
    afterNextRender(() => {
      this.userId = JSON.parse(localStorage.getItem(Constants.USERID_KEY)!);
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.vehicleService.getVehicles(this.userId).pipe(
        takeUntil(this.unsubscribe$)
      ).subscribe(
        {
          next: (data) => {
            this.vehicles = data;
          },
          error: (error) => {
            console.error(error);
          }
        }
      );
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  openSellModal(vehicle: Vehicle): void {
    this.selectedVehicle = vehicle;
    this.salePrice = 0;
    this.saleDate = undefined;
  }

  confirmSell(){
    this.selectedVehicle.sold = true;
    this.selectedVehicle.saleDate = this.saleDate;
    this.selectedVehicle.salePrice = this.salePrice;
    console.log(this.selectedVehicle);
    this.vehicleService.sellVehicle(this.selectedVehicle).subscribe(
      {
        next: () => {
          console.log("Vendeu o Veículo");
          this.vehicleService.removeVehicleFromMyCars(this.selectedVehicle.id).subscribe(
            {
              next: () => {
                this.message = 'Success';
                console.log("Deletou com sucesso");
                
              },
              error: (error) => {
                console.error(error);
                this.message = 'Error';
              }
            }
          );
        },
        error: (error) => {
          console.error(error);
          this.message = 'Error';
        }
      }
    )
  }

  // TODO Botão de Vender e Lógica
}