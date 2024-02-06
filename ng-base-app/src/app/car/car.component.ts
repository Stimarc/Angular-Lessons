import { Component, Input } from '@angular/core';
import { CarType } from 'src/types/CarType';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {

  @Input('carItem') car: CarType = {} as CarType;
}
