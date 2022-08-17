import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestaurantServicePort } from './restaurant.port';
import { delay, Observable, of } from 'rxjs';
import { getRestaurants } from 'src/mocks/fixtures/restaurant';
import { IRestaurant } from 'src/api/interfaces/restaurant.interface';
import { IMenu } from 'src/api/interfaces/menu.interface';
import { getMenus } from 'src/mocks/fixtures/menu';
@Injectable({
  providedIn: 'root',
})
export class RestaurantServiceMock implements RestaurantServicePort {
  constructor(private httpClient: HttpClient) {}

  getRandomRestaurant(): Observable<IRestaurant> {
    const restaurants = getRestaurants();
    const rand = Math.floor(Math.random() * restaurants.length);
    console.log(restaurants[rand]);
    return of(restaurants[rand]);
  }

  getRestaurant(id: string): Observable<IRestaurant> {
    const restaurants = getRestaurants();
    const restaurant = restaurants.find((r) => r.id === id);
    if (!restaurant) throw new Error('not found');
    return of(restaurant).pipe(delay(600));
  }

  getRestaurants() {
    return of(getRestaurants());
  }

  getPopularMenu(): Observable<IMenu | null> {
    return of(getMenus()[0]);
  }
}
