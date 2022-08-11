import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestaurantServicePort } from './restaurant.port';
import { Observable, of } from 'rxjs';
import { getRestaurants } from 'src/mocks/fixtures/restaurant';
import { IRestaurant } from 'src/api/interfaces/restaurant.interface';
import { IMenu } from 'src/api/interfaces/menu.interface';
import { getMenus } from 'src/mocks/fixtures/menu';
@Injectable({
  providedIn: 'root',
})
export class RestaurantServiceMock implements RestaurantServicePort {
  constructor(private httpClient: HttpClient) {}

  getRestaurants() {
    return of(getRestaurants());
  }

  getPopularMenu(): Observable<IMenu | null> {
    return of(getMenus()[0]);
  }
}
