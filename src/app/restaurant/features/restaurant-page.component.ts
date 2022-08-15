import { Component, OnInit } from '@angular/core';
import { IRestaurant } from 'src/api/interfaces/restaurant.interface';
import { getRestaurants } from 'src/mocks/fixtures/restaurant';

@Component({
  selector: 'app-restaurant-page',
  templateUrl: './restaurant-page.component.html',
  styleUrls: ['./restaurant-page.component.scss'],
})
export class RestaurantPageComponent implements OnInit {
  restaurant: IRestaurant = getRestaurants()[0];

  constructor() {}

  ngOnInit(): void {}

  numSequence(number: Number) {
    return Array(number);
  }

  trackStarFn(index: number) {
    return index;
  }

  trackFacilityFn(index: number, facility: string) {
    return facility;
  }
}
