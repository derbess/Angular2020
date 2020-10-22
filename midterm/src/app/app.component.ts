import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  constructor(private router: Router, private location: Location) {}
  links = ['posts', 'posts/create', 'auth/login', 'auth/logout', 'auth/signup', 'alboms'];
  activeLink = 'posts';
  ngOnInit() {
    this.router.events.subscribe(() => {
      const path = this.location.path();
      if (path === '/posts') {
        this.activeLink = 'posts';
      }
      if (path === '/posts/create') {
        this.activeLink = '/posts/create';
      }
      if (path === '/auth/login') {
        this.activeLink = 'auth/login';
      }
      if (path === 'auth/signup') {
        this.activeLink = 'auth/signup';
      }
      if (path === 'alboms') {
        this.activeLink = 'alboms';
      }
    });
  }

  onClick(link) {
    console.log(link);
    this.router.navigate([link]);
  }
}
