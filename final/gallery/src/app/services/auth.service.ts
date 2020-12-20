import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(username, password) {
    const users = JSON.parse(localStorage.getItem('users')) as User[];
    return users.find((user) => user.username === username && user.password === password);
  }

  register(newUser: User) {
    const users = JSON.parse(localStorage.getItem('users')) as User[];
    const { username } = newUser;
    const id = users.length;
    newUser.id = id;
    if(users.find((user) => user.username === username)) return;
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
  }
}
