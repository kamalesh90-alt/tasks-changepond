import { Component } from '@angular/core';

@Component({
  selector: 'app-selectlist',
  templateUrl: './selectlist.component.html',
  styleUrl: './selectlist.component.css'
})
export class SelectlistComponent {
  displayCars: boolean = true;
  selectedVehicle: string = '';

  cars: string[] = ["BMW", "Ford", "Mercedes", "Porsche", "Lamborghini", "Rolls Royce"];
  bikes: string[] = ["Yamaha", "Honda", "Ducati", "Kawasaki", "Harley-Davidson", "Royal Enfield"];

  toggleDisplay(showCars: boolean): void {
    this.displayCars = showCars;
    this.selectedVehicle = '';  
  }

  selectVehicle(vehicle: string): void {
    this.selectedVehicle = vehicle;
  }
}
