import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RecoveryPasswordComponent} from './components/recovery-password/recovery-password.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RegisterComponent} from './components/register/register.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MAT_DATE_LOCALE, MatNativeDateModule} from '@angular/material/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ProfileComponent } from './components/profile/profile.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HeaderInterceptor} from './interceptors/header.interceptor';
import {AuthGuard} from './security/auth.guard';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {ngxLoadingAnimationTypes, NgxLoadingModule} from 'ngx-loading';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RecoveryPasswordComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    MatButtonModule,
    FormsModule,
    MatGridListModule,
    MatToolbarModule,
    MatSnackBarModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.circleSwish,
      fullScreenBackdrop: true,
      backdropBackgroundColour: 'rgba(1,21,80,0.8)',
      backdropBorderRadius: '4px',
      primaryColour: '#c80e5e',
      secondaryColour: '#ffffff',
      tertiaryColour: '#011550'
    })
  ],
  providers: [
    AuthGuard,
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
