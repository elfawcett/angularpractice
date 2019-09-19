import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  activeRoute: string;

  ngOnInit() {
    this.activeRoute = window.location.pathname;
  }

  isActiveRoute(route: string) {
    return this.activeRoute.toLowerCase() === route.toLowerCase();
  }
}
