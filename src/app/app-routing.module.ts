import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./home/features/home.module').then((m) => m.HomeModule),
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
