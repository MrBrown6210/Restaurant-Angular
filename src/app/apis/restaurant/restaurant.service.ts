import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestaurantServicePort } from './restaurant.port';
import { IRestaurant } from 'src/api/interfaces/restaurant.interface';
@Injectable({
  providedIn: 'root',
})
export class RestaurantService implements RestaurantServicePort {
  constructor(private httpClient: HttpClient) {}

  getRestaurants() {
    return this.httpClient.get<IRestaurant[]>('hgh');
  }
}
