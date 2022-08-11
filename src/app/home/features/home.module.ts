import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { APIInterceptor } from 'src/api/api.interceptor';
import { FeatureClientListModule } from '../ui/feature-client-list/feature-client-list.module';
import { HomePageComponent } from './home-page.component';
import { HomeRoutingModule } from './home-routing.module';
import { ClientServiceMock } from '../../apis/client/client.service.mock';
import { RestaurantServiceMock } from 'src/app/apis/restaurant/restaurant.service.mock';
import { PopularMenuModule } from '../ui/popular-menu/popular-menu.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FeatureClientListModule,
    PopularMenuModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: APIInterceptor,
      multi: true,
    },
    ClientServiceMock,
    RestaurantServiceMock,
  ],
  declarations: [HomePageComponent],
})
export class HomeModule {}
