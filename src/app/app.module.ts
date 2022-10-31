import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PipesComponent } from './pipes/pipes.component';
import { PricePipe } from './price.pipe';
import { PackagePipe } from './package.pipe';
import { AgePipe } from './age.pipe';
import { PercentagePipe } from './percentage.pipe';
import { ServwPipe } from './servw.pipe';
import { CarsComponent } from './cars/cars.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { GpayComponent } from './gpay/gpay.component';
import { HttpClientModule } from '@angular/common/http';
import { BankComponent } from './bank/bank.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { MailsComponent } from './mails/mails.component';
import { BankdetailsComponent } from './bankdetails/bankdetails.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateUserComponent } from './create-user/create-user.component';

@NgModule({
  declarations: [
    AppComponent,
    EventRegistrationComponent,
    EmployeeRegistrationComponent,
    LoginComponent,
    DashboardComponent,
    PipesComponent,
    PricePipe,
    PackagePipe,
    AgePipe,
    PercentagePipe,
    ServwPipe,
    CarsComponent,
    PagenotfoundComponent,
    GpayComponent,
    BankComponent,
    VehiclesComponent,
    MailsComponent,
    BankdetailsComponent,
    CreateAccountComponent,
    CreateUserComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
