import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {LoginService} from '../../services/login/login.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isShowOne = false;
  isShowTwo = false;
  registerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]{3,}@[a-z0-9.-]{2,}\\.[a-z]{2,4}$')]),
    birthdate: new FormControl('', Validators.required),
    genre: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.min(8)]),
    confirm: new FormControl('', [Validators.required, Validators.min(8)])
  }, {validators: this.checkPasswords});

  maxDate = new Date();

  constructor(private snackBar: MatSnackBar, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  checkPasswords(group: FormGroup): any { // here we have the 'passwords' group
    const pass = group.get('password').value;
    const confirmPass = group.get('confirm').value;

    return pass === confirmPass ? null : { notSame: true };
  }

  save(): void {
    this.loginService.create(this.registerForm.getRawValue()).toPromise().then(response => {
      console.log(response);
      if (response){
        this.snackBar.open('Verifique seu email! Enviamos um link para ativar sua conta.');
        this.router.navigate(['login']);
      }
    }).catch(err => {
      this.snackBar.open('Ocorreu um problema! Tente novamente.');
    });

  }

}

