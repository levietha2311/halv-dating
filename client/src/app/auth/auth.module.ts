import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth.routing';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { RegisterComponent } from './register/register.component';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ],
  declarations: [
    LoginComponent,
    AuthComponent,
    RegisterComponent,
  ]
})
export class AuthModule { }
