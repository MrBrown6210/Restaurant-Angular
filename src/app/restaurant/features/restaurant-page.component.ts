import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IRestaurant } from 'src/api/interfaces/restaurant.interface';
import { RestaurantServiceMock } from 'src/app/apis/restaurant/restaurant.service.mock';
import { getRestaurants } from 'src/mocks/fixtures/restaurant';

@Component({
  selector: 'app-restaurant-page',
  templateUrl: './restaurant-page.component.html',
  styleUrls: ['./restaurant-page.component.scss'],
})
export class RestaurantPageComponent implements OnInit {
  restaurant?: IRestaurant;

  form = new FormGroup({
    name: new FormControl(''),
  });
  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantServiceMock
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      this.restaurantService
        .getRestaurant(param.get('id')!)
        .subscribe((restaurant) => {
          this.restaurant = restaurant;
        });
    });
  }

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
