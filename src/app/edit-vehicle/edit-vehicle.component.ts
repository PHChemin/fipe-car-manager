import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../services/vehicle.service';
import { ActivatedRoute } from '@angular/router';
import { Vehicle } from '../model/Vehicle';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-vehicle',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './edit-vehicle.component.html',
  styleUrl: './edit-vehicle.component.css'
})
export class EditVehicleComponent implements OnInit{
  vehicleId!: number;
  vehicle!: Vehicle;
  inputPlate: string = "";
  inputKm: number = 0;
  inputColor: string = "";
  inputDate: Date | undefined;
  inputPrice: number | undefined;
  inputObservations: string = "";

  message: string = "";

  constructor(private vehicleService: VehicleService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.vehicleId = +this.route.snapshot.parent?.paramMap.get('id')!;

    setTimeout(() => {
      this.vehicleService.getVehicleById(this.vehicleId).subscribe(
        {
          next: (data) => {
            this.vehicle = data[0];
            this.inputColor = this.vehicle.color;
            this.inputDate = this.vehicle.purchaseDate;
            this.inputKm = this.vehicle.odometer;
            this.inputObservations = this.vehicle.observations;
            this.inputPlate = this.vehicle.plate;
            this.inputPrice = this.vehicle.purchasePrice;
          },
          error: (error) => {
            console.error(error);
          }
        }
      );
    });
  }

  onSave(){
    this.vehicle.color = this.inputColor;
    this.vehicle.purchaseDate = this.inputDate;
    this.vehicle.odometer = this.inputKm;
    this.vehicle.observations = this.inputObservations;
    this.vehicle.plate = this.inputPlate;
    this.vehicle.purchasePrice = this.inputPrice;

    this.vehicleService.updateVehicle(this.vehicle).subscribe(
      {
        next: () => {
          this.message = "Success"
        },
        error: (error) => {
          this.message = "Error"
          console.error(error);
        }
      }
    );
  }
}
