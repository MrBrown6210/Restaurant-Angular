import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'travel-app';
  url: string = '';
  constructor(private router: Router) {
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
}
