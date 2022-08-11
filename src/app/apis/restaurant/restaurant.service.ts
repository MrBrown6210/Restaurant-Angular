import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestaurantServicePort } from './restaurant.port';
import { IRestaurant } from 'src/api/interfaces/restaurant.interface';
import { catchError, Observable, of, tap } from 'rxjs';
import { IMenu } from 'src/api/interfaces/menu.interface';
@Injectable({
  providedIn: 'root',
})
export class RestaurantService implements RestaurantServicePort {
  constructor(private httpClient: HttpClient) {}

  getRestaurants() {
    return this.httpClient
      .get<IRestaurant[]>('restaurants')
      .pipe(tap((_) => console.log('fetched restaurants')));
  }

  getPopularMenu(): Observable<IMenu | null> {
    return this.httpClient.get<IMenu>('restaurants/popular/menu/popular').pipe(
      tap((_) => console.log('fetch popular')),
      catchError(() => of(null))
    );
  }
}
