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
    path: '',
    loadChildren: () =>
      import('./auth/features/auth-shell/auth-shell.module').then(
        (m) => m.AuthShellModule
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
