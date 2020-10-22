import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthModel } from './../models/auth.models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  BASE_URL = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  signup(data) {
    return this.http.post(`${this.BASE_URL}/users/`, data);
  }

  login(data: AuthModel) {
    return this.http.post(`${this.BASE_URL}/sign-in/`, data);
  }

}
