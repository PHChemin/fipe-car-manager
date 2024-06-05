import { Injectable } from "@angular/core";
import { Vehicle } from "../model/Vehicle";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class VehicleService {
    urlMyCars: string = 'http://localhost:3000/my-cars';
    urlSoldCars: string = 'http://localhost:3000/cars-sold';
    userId: number = -1;

    constructor(private http: HttpClient){

    }

    saveVehicle(vehicle: Vehicle): Observable<Vehicle>{
        return this.http.post<Vehicle>(this.urlMyCars, vehicle);
    }

    getVehicles(userId: number): Observable<Vehicle[]>{
        return this.http.get<Vehicle[]>(`${this.urlMyCars}?userId=${userId}`);
    }

    getVehicleById(id: number): Observable<Vehicle[]> {
        return this.http.get<Vehicle[]>(`${this.urlMyCars}?id=${id}`);
    }

    sellVehicle(vehicle: Vehicle): Observable<Vehicle>{
        return this.http.post<Vehicle>(this.urlSoldCars, vehicle);
    }

    getSoldVehicles(userId: number): Observable<Vehicle[]>{
        return this.http.get<Vehicle[]>(`${this.urlSoldCars}?userId=${userId}`);
    }

    removeVehicleFromMyCars(id: number): Observable<Vehicle>{
        return this.http.delete<Vehicle>(`${this.urlMyCars}/${id}`);
    }
}