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
        { color: 'black', img: 'bmw-black.jpg' },
      ],
      isActive: true,
    },
    {
      id: 2,
      name: 'Ford',
      model: 'Fusion',
      year: 2017,
      colors: [
        { color: 'black', img: 'bmw-black.jpg' },
      ],
      isActive: false,

    },
    {
      id: 3,
      name: 'Audi',
      model: 'A6',
      year: 2020,
      colors: [
        { color: 'black', img: 'bmw-black.jpg' },
      ],
      isActive: true,
    }

  ];

}
