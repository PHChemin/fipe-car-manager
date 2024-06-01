import { Injectable } from "@angular/core";
import { Vehicle } from "../model/Vehicle";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class VehicleService {
    private vehicles: Vehicle[] = [];
    urlMyCars: string = 'http://localhost:3000/my-cars';
    urlSoldCars: string = 'http://localhost:3000/cars-sold';

    constructor(private htpp: HttpClient){}

    saveVehicle(vehicle: Vehicle): Observable<Vehicle>{
        return this.htpp.post<Vehicle>(this.urlMyCars, vehicle);
    }

    getVehicles(){
        return this.vehicles;
    }
}