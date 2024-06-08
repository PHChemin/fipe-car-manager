import { Vehicle } from './../model/Vehicle';
import { Component, Output, Input, EventEmitter, OnDestroy} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FipeService } from '../services/fipe.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-form-add-car',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
  ],
  templateUrl: './form-add-car.component.html',
  styleUrl: './form-add-car.component.css'
})
export class FormAddCarComponent implements OnDestroy{
  @Input() brands: any[] = [];
  @Input() showSuccessMessage: boolean = false;
  @Input() showErrorMessage: boolean = false;
  @Output() vehicleAdded = new EventEmitter<Vehicle>();
  showCarNotFoundMessage: boolean = false;
  private unsubscribe$ = new Subject<void>();
  brandInput: string = "";
  brandCode: number = -1;

  modelInput: string = "";
  modelCode: number = -1;
  models: any[] = [];

  yearInput: string = "";
  yearCode: number = -1;
  years: any[] = [];

  dateInput: Date | undefined;
  priceInput: number | undefined;
  plateInput: string = "";

  filteredBrands: any[] = [];
  filteredModels: any[] = [];
  filteredYears: any[] = [];

  // TODO Validação dos Inputs e Disable do Botão
  
  constructor(private fipeService: FipeService){}

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  filterBrand(){
    if (this.brandInput.length >= 2){
      this.filteredBrands = this.brands.filter(brand => 
        brand.nome.toLowerCase().includes(this.brandInput.toLowerCase())
      );
      if(this.filteredBrands.length == 1){
        this.brandCode = this.filteredBrands[0].codigo;
        this.requestModels();
      } else {
        this.brandCode = -1;
      }
    } else {
        this.filteredBrands = [];
    }
  }

  filterModel(){
    if (this.modelInput.length >= 4){
      this.filteredModels = this.models.filter(model => 
        model.nome.toLowerCase().includes(this.modelInput.toLowerCase())
      );
      if(this.filteredModels.length == 1){
        this.modelCode = this.filteredModels[0].codigo;
        this.requestYears();
      } else {
        this.modelCode = -1;
      }
    } else {
        this.filteredModels = [];
    }
  }

  filterYear(){
    if (this.yearInput.length >= 1){
      this.filteredYears = this.years.filter(year => 
        year.nome.toLowerCase().includes(this.yearInput.toLowerCase())
      );
      if(this.filteredYears.length == 1){
        this.yearCode = this.filteredYears[0].codigo;
      } else {
        this.yearCode = -1;
      }
    } else {
        this.filteredYears = [];
    }
  }

  requestModels(){
    if(this.brandCode !== -1){
      this.fipeService.getModels(this.brandCode).pipe(
        takeUntil(this.unsubscribe$) // Cancela a inscrição quando o componente for destruído
      ).subscribe(
        {
          next: (data) => {
            this.models = data.modelos;
          },
          error: (error) => {
            console.error(error);
          }
        }
      );
    }
  }

  requestYears() {
    if(this.modelCode !== -1){
      this.fipeService.getYears(this.brandCode, this.modelCode).pipe(
        takeUntil(this.unsubscribe$) // Cancela a inscrição quando o componente for destruído
      ).subscribe(
        {
          next: (data) => {
            this.years = data;
          },
          error: (error) => {
            console.error(error);
          }
        }
      );
    }
  }

  onSubmit(){
    if(this.brandCode == -1 || this.modelCode == -1 || this.yearCode == -1){
      this.showCarNotFoundMessage = true;
      this.clearInputs();
    }else{
      this.fipeService.getAllInformations(this.brandCode, this.modelCode, this.yearCode).pipe(
        takeUntil(this.unsubscribe$)
      ).subscribe(
        {
          next: (data) => {
            let vehicle: Vehicle = new Vehicle();
            vehicle.id = Math.floor(Math.random() * 1000); 
            vehicle.brand = data.Marca;
            vehicle.model = data.Modelo;
            vehicle.year = data.AnoModelo;
            vehicle.fipe = data.Valor;
            vehicle.plate = this.plateInput;
            vehicle.purchaseDate = this.dateInput;
            vehicle.purchasePrice = this.priceInput;
            
            this.addVehicle(vehicle);
          },
          error: (error) => {
            console.error(error);
          }
        }
      );
    }
  }

  clearMessage(){
    this.showErrorMessage = false;
    this.showSuccessMessage = false;
    this.showCarNotFoundMessage = false;
  }

  clearInputs(){
    this.brandInput = "";
    this.modelInput = "";
    this.yearInput = "";
    this.plateInput = "";
    this.priceInput = undefined;
    this.dateInput = undefined;
  }

  addVehicle(vehicle: Vehicle) {
    this.vehicleAdded.emit(vehicle);
    this.clearInputs();
  }
  
}
