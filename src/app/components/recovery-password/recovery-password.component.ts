import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-recovery-password',
  templateUrl: './recovery-password.component.html',
  styleUrls: ['./recovery-password.component.css']
})
export class RecoveryPasswordComponent implements OnInit {
  recoveryForm = new FormGroup({
    email: new FormControl('', Validators.required)
  });
  constructor() { }

  ngOnInit(): void {
  }

}
