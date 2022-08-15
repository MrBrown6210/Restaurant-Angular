import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';

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
  providers: [AuthGuard],
  exports: [RouterModule],
})
export class AppRoutingModule {}
