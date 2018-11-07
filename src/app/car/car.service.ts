import {Observable } from 'rxjs';

export class CarService {

  private isVisible = true;

  showcar(){
    this.isVisible = true;
  }

  hideCar(){
    this.isVisible = false;
  }

  getVisibilite(){
    return this.isVisible;
  }
}
