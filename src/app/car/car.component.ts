import { Component, OnInit } from '@angular/core';
import {CarService} from './car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  providers: [CarService]
})
export class CarComponent implements OnInit {
   isCarVisible: boolean;
   header = 'My car header';
  constructor(private service: CarService) { }


  ngOnInit() {
    this.isCarVisible = this.service.getVisibilite();
  }

}
