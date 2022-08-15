import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantRoutingModule } from './restaurant-routing.module';
import { RestaurantPageComponent } from './restaurant-page.component';

@NgModule({
  declarations: [RestaurantPageComponent],
  imports: [RestaurantRoutingModule, CommonModule],
})
export class RestaurantModule {}
