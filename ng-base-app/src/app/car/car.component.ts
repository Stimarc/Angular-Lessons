import { Component, Input, OnInit } from '@angular/core';
import { CarType, ColorsType } from 'src/types/CarType';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  @Input('carItem') car: CarType = {} as CarType;

  currentColor: ColorsType = {} as ColorsType;

  ngOnInit() {
     this.currentColor = this.car.colors[0]
  }

  changeColor(color: ColorsType) {
    this.currentColor = color;
  }
}
