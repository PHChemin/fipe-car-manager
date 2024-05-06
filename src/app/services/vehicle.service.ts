import { Injectable } from "@angular/core";
import { Vehicle } from "../model/Vehicle";

@Injectable({
    providedIn: 'root'
})
export class VehicleService {
    private vehicles: Vehicle[] = [];

    constructor(){}

    addVehicles(vehicle: Vehicle){
        this.vehicles.push(vehicle);
    }

    getVehicles(){
        return this.vehicles;
    }

    getVehicleId(){
        return this.vehicles.length;
    }
}