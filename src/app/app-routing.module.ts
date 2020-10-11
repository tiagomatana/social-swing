import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {RecoveryPasswordComponent} from './components/recovery-password/recovery-password.component';
import {RegisterComponent} from './components/register/register.component';
import {ProfileComponent} from './components/profile/profile.component';
import {AuthGuard} from './security/auth.guard';
import {HomeComponent} from './components/home/home.component';
import {LoggedGuard} from './security/logged.guard';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoggedGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [LoggedGuard]
  },
  {
    path: 'recovery-password',
    component: RecoveryPasswordComponent,
    canActivate: [LoggedGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'profile',
        component: ProfileComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
