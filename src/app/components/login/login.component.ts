import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../services/login/login.service';
import {response} from 'express';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isShow = false;
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  login(): void {
    // tslint:disable-next-line:no-shadowed-variable
    this.loginService.login(this.loginForm).toPromise().then((response) => {
      this.loginService.setToken(response.data);
    }).catch(err => {
      console.log(err);
    });
  }

}
