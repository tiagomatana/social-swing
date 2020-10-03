import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
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
    email: new FormControl('', Validators.required),
    birthdate: new FormControl('', Validators.required),
    genre: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirm: new FormControl('', Validators.required)
  }, {validators: this.checkPasswords});
  constructor() { }

  ngOnInit(): void {

  }

  checkPasswords(group: FormGroup): any { // here we have the 'passwords' group
    const pass = group.get('password').value;
    const confirmPass = group.get('confirm').value;

    return pass === confirmPass ? null : { notSame: true };
  }

  save(): void {
    console.log(this.registerForm);
  }

}

