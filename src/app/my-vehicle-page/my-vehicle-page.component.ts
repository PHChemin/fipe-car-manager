import { VehicleService } from './../services/vehicle.service';
import { Component, OnDestroy, OnInit, afterNextRender, ViewChild, ElementRef } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { Constants } from '../util/constants';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink, Router } from '@angular/router';
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
  @ViewChild('saleModal') saleModal!: ElementRef;
  userId!: number;
  vehicles: Vehicle[] = [];
  private unsubscribe$ = new Subject<void>();
  saleDate: Date | undefined;
  salePrice: number | undefined;
  selectedVehicle!: Vehicle;
  message: string = '';

  constructor(private vehicleService: VehicleService, private router: Router){
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
    this.salePrice = undefined;
    this.saleDate = undefined;
  }

  confirmSell(){
    this.selectedVehicle.sold = true;
    this.selectedVehicle.saleDate = this.saleDate;
    this.selectedVehicle.salePrice = this.salePrice!;
    this.vehicleService.sellVehicle(this.selectedVehicle).subscribe(
      {
        next: () => {
          this.vehicleService.removeVehicleFromMyCars(this.selectedVehicle.id).subscribe(
            {
              next: () => {
                this.message = 'Success';
                setTimeout(() => {
                  this.message = '';
                  this.reloadPage();
                }, 2000);
                
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
    );
  }

  reloadPage() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/my-vehicle']);
    });
  }
  // TODO Botão de Vender e Lógica
}