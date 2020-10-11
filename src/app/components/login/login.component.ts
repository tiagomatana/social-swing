import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../services/login/login.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isShow = false;
  loading = false;
  loginForm = new FormGroup({
    email: new FormControl(null, [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]{3,}@[a-z0-9.-]{2,}\\.[a-z]{2,4}$')]),
    password: new FormControl(null, Validators.required)
  });
  constructor(private loginService: LoginService, private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    this.loading = true;
    // tslint:disable-next-line:no-shadowed-variable
    this.loginService.login(this.loginForm).toPromise().then(response => {
      this.loginService.setToken(response.data);
      this.router.navigate(['home']);
      this.loading = false;
    }).catch(err => {
      this.loading = false;
      this.loginForm.reset();
      this.snackBar.open('Login incorreto!', 'X');
    });
  }



}
