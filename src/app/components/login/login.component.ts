import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../services/login/login.service';
import {response} from 'express';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isShow = false;
  loading = false;
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  constructor(private loginService: LoginService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  login(): void {
    this.loading = true;
    // tslint:disable-next-line:no-shadowed-variable
    this.loginService.login(this.loginForm).toPromise().then(response => {
      this.loginService.setToken(response.data);
      this.loading = false;
    }).catch(err => {
      this.loading = false;
      this.loginForm.reset();
      this.showMessage('Login incorreto!');
    });
  }

  showMessage(msg): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'bottom'
    });
  }

}
