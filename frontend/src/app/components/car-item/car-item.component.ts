import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.css'],
})
export class CarItemComponent {
  @Input() voiture: any; // Input for the car object
  @Input() key!: string; // Input for the unique key

  constructor(private router: Router) {}

  // Navigate to the details page of the car
  viewDetails() {
    this.router.navigate([`/cars/${this.voiture._id}`]);
  }

  // Navigate to the booking page of the car
  rentCar() {
    this.router.navigate([`/cars/${this.voiture._id}/book`]); // Updated path for booking if necessary
  }
}
