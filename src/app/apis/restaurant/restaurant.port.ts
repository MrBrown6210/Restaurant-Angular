import { Observable } from 'rxjs';
import { IRestaurant } from 'src/api/interfaces/restaurant.interface';

export interface RestaurantServicePort {
  getRestaurants(): Observable<IRestaurant[]>;
}
