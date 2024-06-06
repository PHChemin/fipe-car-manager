import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LandPageComponent } from './land-page/land-page.component';
import { RegisterComponent } from './register/register.component';
import { MyVehiclePageComponent } from './my-vehicle-page/my-vehicle-page.component';
import { AddVehiclePageComponent } from './add-vehicle-page/add-vehicle-page.component';
import { VehicleDatailComponent } from './vehicle-datail/vehicle-datail.component';
import { LoginComponent } from './login/login.component';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { AuthenticationGuard } from './authentication.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { CarSoldPageComponent } from './car-sold-page/car-sold-page.component';
import { EditVehicleComponent } from './edit-vehicle/edit-vehicle.component';
import { HelpEditMessageComponent } from './help-edit-message/help-edit-message.component';

export const routes: Routes = [
    {path: 'land-page', component: LandPageComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'profile', component: ProfileComponent, canActivate: [AuthenticationGuard]},
    {path: 'add-vehicle', component: AddVehiclePageComponent, canActivate: [AuthenticationGuard]},
    {
        path: 'my-vehicle/details/:id', component: VehicleDatailComponent, canActivate: [AuthenticationGuard],
        children: [
            {
                path: 'edit',
                component: EditVehicleComponent,
            },
            {
                path: '',
                component: HelpEditMessageComponent,
            },
        ],
    },
    {path: 'my-vehicle', component: MyVehiclePageComponent, canActivate: [AuthenticationGuard]},
    {path: 'car-sold', component: CarSoldPageComponent, canActivate: [AuthenticationGuard]},
    {path: 'not-authorized', component: NotAuthorizedComponent},
    {path: '', redirectTo: '/land-page', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent},
];
