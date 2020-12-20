import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthHtppInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    if (sessionStorage.getItem('username') && localStorage.getItem('token')) {
      req = req.clone({
        setHeaders: {
          Authorization: "Bearer "+localStorage.getItem('token')
        }
      })
    }

    return next.handle(req);

  }
}
