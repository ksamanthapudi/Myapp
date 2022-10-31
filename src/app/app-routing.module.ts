import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankComponent } from './bank/bank.component';
import { BankdetailsComponent } from './bankdetails/bankdetails.component';
import { CarsComponent } from './cars/cars.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GpayComponent } from './gpay/gpay.component';
import { LoginComponent } from './login/login.component';
import { MailsComponent } from './mails/mails.component';
import { PipesComponent } from './pipes/pipes.component';
import { VehiclesComponent } from './vehicles/vehicles.component';



const routes: Routes = [
{path:'login',component:LoginComponent},
{path:'dashboard', component:DashboardComponent, children:[
{path:'pipes', component:PipesComponent},
{path:'cars', component: CarsComponent},
{path:'Gpay', component:GpayComponent},
{path:'Bank', component:BankComponent},
{path: 'vehicles', component:VehiclesComponent},
{path: 'mails', component:MailsComponent},
{path: 'bankdetails/:id', component:BankdetailsComponent},
{path: 'create-account', component:CreateAccountComponent},
{path: 'create-user', component:CreateUserComponent}



]},
 
{path:'',component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
