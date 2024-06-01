import { CommonModule } from '@angular/common';
import { FipeService } from './../services/fipe.service';
import { Component, Input, OnDestroy, OnInit, Output, afterNextRender } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { FooterComponent } from '../footer/footer.component';
import { FormAddCarComponent } from '../form-add-car/form-add-car.component';
import { Vehicle } from '../model/Vehicle';
import { VehicleService } from '../services/vehicle.service';
import { Subject, takeUntil } from 'rxjs';
import { Constants } from '../util/constants';

@Component({
  selector: 'app-add-vehicle-page',
  standalone: true,
  imports: [
    MenuComponent,
    FooterComponent,
    FormAddCarComponent,
    CommonModule,
  ],
  templateUrl: './add-vehicle-page.component.html',
  styleUrl: './add-vehicle-page.component.css'
})
export class AddVehiclePageComponent implements OnInit, OnDestroy {
  showSuccessMessage: boolean = false;
  showErrorMessage: boolean = false;
  brands: any = [];
  private unsubscribe$ = new Subject<void>();
  userId!: number;

  constructor(private vehicleService: VehicleService, private fipeService: FipeService){
    afterNextRender(() => {
      this.userId = JSON.parse(localStorage.getItem(Constants.USERID_KEY)!);
    });
  }

  ngOnInit(): void {
    this.fipeService.getAllBrands().pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(
      {
        next: (data) => {
          this.brands = data;
        },
        error: (error) => {
          console.error(error);
        }
      }
    )
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
  
  
  onVehicleAdded(newVehicle: Vehicle) {
    newVehicle.userId = this.userId;
    this.vehicleService.saveVehicle(newVehicle).subscribe(
      {
        next: () => {
          this.showSuccessMessage = true;
          this.showErrorMessage = false;
        },
        error: (error) => {
          this.showErrorMessage = true;
          this.showSuccessMessage = false;
          console.error(error);
        }
      }
    );
  }

}