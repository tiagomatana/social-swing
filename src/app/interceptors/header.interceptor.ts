import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginService} from '../services/login/login.service';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor(private loginService: LoginService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.loginService.getToken();
    const modified = request.clone({
      setHeaders: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'x-access-token': token
      }});

    return next.handle(modified);
  }
}
