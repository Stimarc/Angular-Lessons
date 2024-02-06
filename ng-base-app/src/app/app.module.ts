import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { CarsComponent } from './cars/cars.component';
import { AddCarComponent } from './add-car/add-car.component';


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CarsComponent,
    AddCarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
