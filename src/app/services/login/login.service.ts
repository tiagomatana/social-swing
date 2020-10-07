import { Injectable } from '@angular/core';
import {ClientService} from '../client/client.service';
import {FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private token: string;
  private TOKEN_NAME = '_auth-token';

  constructor(private client: ClientService, private cookieService: CookieService) { }

  public login(data: FormGroup): Observable<any> {
    return this.client.login({email: data.get('email').value, password: data.get('password').value});
  }

  public logout(): void {
    this.setToken({token: null});
  }

  public getToken(): string {
    return this.token ? this.token : this.cookieService.get(this.TOKEN_NAME);
  }

  public setToken(data: any): void {
    this.token = data.token;
    this.cookieService.set(this.TOKEN_NAME, data.token);
  }
}
