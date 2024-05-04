import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-add-vehicle-page',
  standalone: true,
  imports: [
    MenuComponent,
    FooterComponent,
  ],
  templateUrl: './add-vehicle-page.component.html',
  styleUrl: './add-vehicle-page.component.css'
})
export class AddVehiclePageComponent {
  // TODO lógica para adicionar os carros

  //TODO requisição para API da Tabela Fipe
}
