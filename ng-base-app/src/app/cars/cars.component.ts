import { Component } from '@angular/core';
import { CarType } from 'src/types/CarType';



@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  cars: CarType[] = [
    {
      id: 1,
      name: 'BMW',
      model: 'X5',
      year: 2015,
      colors: [
        { color: 'red', img: 'bmw-red.jpg' },
        { color: 'blue', img: 'bmw-blue.jpg' },
        { color: 'black', img: 'bmw-black.jpg' },
        { color: 'silver', img: 'bmw-silver.jpg' },
        
      ],
      isActive: true,
    },
    {
      id: 2,
      name: 'Ford',
      model: 'Fusion',
      year: 2017,
      colors: [
        { color: 'blue', img: 'ford-blue.jpg' },
        { color: 'green', img: 'ford-green.webp' },
        { color: 'red', img: 'ford-red.png' },
        { color: 'white', img: 'ford-white.png' },
      ],
      isActive: true,
    },
    {
      id: 3,
      name: 'Audi',
      model: 'A6',
      year: 2020,
      colors: [
        { color: 'red', img: 'audi-red.jpg' },
        { color: 'blue', img: 'audi-blue.webp' },
        { color: 'green', img: 'audi-green.webp' },
        { color: 'black', img: 'no-image.png' },
      ],
      isActive: false,
    }

  ];

  updateCarList(car: CarType) {
    this.cars.push(car)
  }

}
