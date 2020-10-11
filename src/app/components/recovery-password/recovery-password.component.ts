import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../services/login/login.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-recovery-password',
  templateUrl: './recovery-password.component.html',
  styleUrls: ['./recovery-password.component.css']
})
export class RecoveryPasswordComponent implements OnInit {
  recoveryForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]{3,}@[a-z0-9.-]{2,}\\.[a-z]{2,4}$')])
  });
  constructor(
    private loginService: LoginService,
    private snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
  }

  recovery(): void {
    this.loginService.recovery(this.recoveryForm).toPromise().then(response => {
      this.router.navigate(['/login']);
    }).catch(err => {
        console.log(123);
    });
    this.snackBar.open('Nova senha enviada! Verifique seu email.', 'X');
  }

}
