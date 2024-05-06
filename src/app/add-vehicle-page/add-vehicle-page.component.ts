import { Component, Input, Output } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { FooterComponent } from '../footer/footer.component';
import { FormAddCarComponent } from '../form-add-car/form-add-car.component';
import { Vehicle } from '../model/Vehicle';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-add-vehicle-page',
  standalone: true,
  imports: [
    MenuComponent,
    FooterComponent,
    FormAddCarComponent,
  ],
  templateUrl: './add-vehicle-page.component.html',
  styleUrl: './add-vehicle-page.component.css'
})
export class AddVehiclePageComponent {
  showMessage: boolean = false;
  

  constructor(private vehicleService: VehicleService){
  }
  // TODO Enviar dados para o MyVehicleComponent

  // TODO Lógica para mensagem de sucesso

  statusSuccessMessage(showMessage: boolean) {
    console.log(this.showMessage);
    this.showMessage = showMessage;
    console.log(showMessage);
  }
  // TODO lógica para adicionar os carros
  onVehicleAdded(newVehicle: Vehicle) {
    newVehicle.id = this.vehicleService.getVehicleId();
    this.vehicleService.addVehicles(newVehicle);
    console.log(this.vehicleService.getVehicles());
  }

  //TODO requisição para API da Tabela Fipe
}