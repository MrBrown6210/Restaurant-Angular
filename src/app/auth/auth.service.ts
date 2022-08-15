import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {
  constructor(private jwtHelperService: JwtHelperService) {
    jwtHelperService = new JwtHelperService();
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (!token) return false;
    return !this.jwtHelperService.isTokenExpired(token);
  }
}
