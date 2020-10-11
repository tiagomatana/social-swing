import { Injectable } from '@angular/core';
import {CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivate} from '@angular/router';
import { Observable } from 'rxjs';
import {LoginComponent} from '../components/login/login.component';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoggedGuard implements CanActivate {
  constructor(private router: Router, private http: HttpClient) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    this.http.get(environment.api).toPromise().then(response => {
      let body: any;
      body = response;
      if (body.code === 200){
        this.router.navigate(['home']);
      }

    });
    return true;
  }

}
