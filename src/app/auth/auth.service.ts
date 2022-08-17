import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { firstValueFrom } from 'rxjs';
import { AuthServiceMock } from '../apis/auth/auth.service.mock';

@Injectable()
export class AuthService {
  constructor(
    private jwtHelperService: JwtHelperService,
    private authServiceAPI: AuthServiceMock
  ) {
    jwtHelperService = new JwtHelperService();
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (!token) return false;
    return !this.jwtHelperService.isTokenExpired(token);
  }

  async login(email: string, password: string) {
    const res = await firstValueFrom(
      this.authServiceAPI.login(email, password)
    );
    localStorage.setItem('token', res.token);
  }

  logout() {
    localStorage.removeItem('token');
  }
}
