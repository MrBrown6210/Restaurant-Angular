import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IClient } from 'src/api/interfaces/client.interface';
import { IMenu } from 'src/api/interfaces/menu.interface';
import { IRestaurant } from 'src/api/interfaces/restaurant.interface';
import { ClientServiceMock } from 'src/app/apis/client/client.service.mock';
import { RestaurantServiceMock } from 'src/app/apis/restaurant/restaurant.service.mock';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  clients: IClient[] = [];
  restaurants: IRestaurant[] = [];
  popularMenu: IMenu | null = null;
  constructor(
    private clientService: ClientServiceMock,
    private restaurantService: RestaurantServiceMock,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.clientService.getClients().subscribe((clients) => {
      this.clients = clients;
    });
    this.restaurantService.getRestaurants().subscribe((restaurants) => {
      this.restaurants = restaurants;
    });
    this.restaurantService.getPopularMenu().subscribe((menu) => {
      this.popularMenu = menu;
    });
  }

  selectMenu(menu: IMenu) {
    console.log('select menu:', menu);
    this.router.navigate([`/restaurants/${menu.restaurant.id}`]);
  }
}
