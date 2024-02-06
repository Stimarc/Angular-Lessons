import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CarType } from 'src/types/CarType';


@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  carName = '';
  carModel = '';
  carYear = 2024;

  @Output ('onAddCar') carEmitter = new EventEmitter()
  
  ngOnInit(): void {
  }

  addCar() {
    const newCar: CarType = {} as CarType;
    
    newCar.name = this.carName;
    newCar.model = this.carModel;
    newCar.year = this.carYear;


    newCar.colors = [
      {color: 'red',img:''},
      {color: 'blue',img:''},
      {color: 'green',img:''},
    ];
    console.log(newCar);

    this.carEmitter.emit(newCar);

    this.carName = '';
    this.carModel = '';
    this.carYear = 2024;
  }

}
