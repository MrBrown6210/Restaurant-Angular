import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./home/features/home.module').then((m) => m.HomeModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./auth/features/login-page/login-page.module').then(
        (m) => m.LoginPageModule
      ),
  },
  {
    path: 'restaurants',
    loadChildren: () =>
      import('./restaurant/features/restaurant.module').then(
        (m) => m.RestaurantModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
