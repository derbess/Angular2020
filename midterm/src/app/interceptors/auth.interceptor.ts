import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import {Token} from '../models/auth.models';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = JSON.parse(localStorage.getItem('token')) as Token;
    console.log(token);
    if (token) {
      const res = req.clone({
        headers: req.headers.set('Authorization', token.access_token)
      });
      return next.handle(res);
    }
    return next.handle(req);
  }
}
