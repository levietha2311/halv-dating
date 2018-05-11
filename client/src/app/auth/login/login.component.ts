import { Component, OnInit } from '@angular/core';
import { IUser } from '../user';
import { LoginService } from '../../service/login.service';
import { MatSnackBar } from '@angular/material';
import { Action } from 'rxjs/scheduler/Action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  users: IUser[];
  user: IUser;
  name = '';
  password = '';
  constructor(private _logginService: LoginService, public snackBar: MatSnackBar) {
    this._logginService.getuser()
      .subscribe(res => {
        this.users = res;
      });
  }
  selectedStatus = '';
  Status = ['Online', 'Hidden'];
  onKey(event: KeyboardEvent) {
    this.name = (<HTMLInputElement>event.target).value;
  }
  onKey1(event: KeyboardEvent) {
    this.password = (<HTMLInputElement>event.target).value;
  }
  openSnackBar() {
    this.snackBar.open('Login', 'success', {
      duration: 500,
    });
  }

  onLogin() {
    const request = { username: this.name, password: this.password, status: this.selectedStatus};
    this._logginService.login(request).subscribe(user => {
      this.user = user;
      this.snackBar.open(user.Name + ' Logged as', this.selectedStatus, {
        duration: 2000,
      });
    });
  }
  ngOnInit() { }
}
