import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LandPageComponent } from './land-page/land-page.component';
import { RegisterComponent } from './register/register.component';
import { MyVehiclePageComponent } from './my-vehicle-page/my-vehicle-page.component';
import { AddVehiclePageComponent } from './add-vehicle-page/add-vehicle-page.component';
import { VehicleDatailComponent } from './vehicle-datail/vehicle-datail.component';

export const routes: Routes = [
    {path: 'land-page', component: LandPageComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'add-vehicle', component: AddVehiclePageComponent},
    {path: 'my-vehicle/details/:id', component: VehicleDatailComponent},
    {path: 'my-vehicle', component: MyVehiclePageComponent},
    {path: '', redirectTo: '/land-page', pathMatch: 'full'},
];
