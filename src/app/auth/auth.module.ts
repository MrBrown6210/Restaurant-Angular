import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { JwtModule } from '@auth0/angular-jwt';

@NgModule({
  providers: [AuthService, AuthGuard],
  imports: [CommonModule, JwtModule.forRoot({})],
})
export class AuthModule {}
