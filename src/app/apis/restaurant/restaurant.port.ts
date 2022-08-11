import { Observable } from 'rxjs';
import { IMenu } from 'src/api/interfaces/menu.interface';
import { IRestaurant } from 'src/api/interfaces/restaurant.interface';

export interface RestaurantServicePort {
  getRestaurants(): Observable<IRestaurant[]>;
  getPopularMenu(): Observable<IMenu | null>;
}
