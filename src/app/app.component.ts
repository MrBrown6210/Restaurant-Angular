import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'travel-app';
  url: string = '';

  form = new FormGroup({
    name: new FormControl(''),
  });
  constructor(private router: Router, private authService: AuthService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.onRouteChange(event.url);
      }
    });
  }

  onRouteChange(url: string) {
    this.url = url;
  }

  shouldShowHeader(): boolean {
    if (this.url.includes('login')) {
      return false;
    }
    return true;
  }

  shouldShowLogout(): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    }
    return false;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
