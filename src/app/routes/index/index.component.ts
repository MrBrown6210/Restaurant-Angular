import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../apis/restaurant/restaurant.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {}
}
