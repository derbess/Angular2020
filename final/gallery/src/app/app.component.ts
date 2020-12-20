import { Component, OnInit } from '@angular/core';
import { users } from './db/users';
import { museums } from './db/museum';
import { masterpieces } from './db/masterpices';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'gallery';
  ngOnInit(): void {
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('museums', JSON.stringify(museums));
    localStorage.setItem('masterpieces', JSON.stringify(masterpieces));
  }
}
