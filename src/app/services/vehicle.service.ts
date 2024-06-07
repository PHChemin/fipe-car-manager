import { Injectable, ViewChildFunction } from "@angular/core";
import { Vehicle } from "../model/Vehicle";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class VehicleService {
    urlMyCars: string = `${environment.apiUrl}/my-cars`;
    urlSoldCars: string = `${environment.apiUrl}/cars-sold`;
    userId: number = -1;

    constructor(private http: HttpClient){

    }

    saveVehicle(vehicle: Vehicle): Observable<Vehicle>{
        return this.http.post<Vehicle>(this.urlMyCars, vehicle);
    }

    updateVehicle(vehicle: Vehicle): Observable<Vehicle>{
        return this.http.put<Vehicle>(`${this.urlMyCars}/${vehicle.id}`, vehicle);
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