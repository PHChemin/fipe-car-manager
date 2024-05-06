import { Vehicle } from './../model/Vehicle';
import { Component, Output, Input, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-add-car',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './form-add-car.component.html',
  styleUrl: './form-add-car.component.css'
})
export class FormAddCarComponent {
  @Input() id: number = 0;
  @Output() vehicleAdded = new EventEmitter<Vehicle>();
  @Output() successMessageEvent = new EventEmitter<boolean>();
  vehicle: Vehicle = new Vehicle();

  // TODO Validação dos Inputs e Disable do Botão
  
  clearInputs(){
    this.vehicle = new Vehicle();
  }

  addVehicle() {
    this.vehicle.id = this.id;
    this.vehicleAdded.emit(this.vehicle);
    this.clearInputs();
  }

  sendMessage() {
    this.successMessageEvent.emit(true);
  }
  
}
