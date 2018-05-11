import { Component, OnInit } from '@angular/core';
import { IUser } from '../user';
import { MatSnackBar } from '@angular/material';
import { Action } from 'rxjs/scheduler/Action';
import { RegisterService } from '../../service/register.service';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: IUser;
  name = '';
  username = '';
  password = '';
  repassword = '';
  selectedSex = '';
  Sexs = ['Male', 'Female'];
  constructor(private _registerService: RegisterService) { }
  onKey(event: KeyboardEvent) {
    this.username = (<HTMLInputElement>event.target).value;
  }
  onKey1(event: KeyboardEvent) {
    this.password = (<HTMLInputElement>event.target).value;
  }
  onKey2(event: KeyboardEvent) {
    this.name = (<HTMLInputElement>event.target).value;
  }
  // onKey3(event: KeyboardEvent) {
  //   this.repassword = (<HTMLInputElement>event.target).value;
  // }
  onRegister() {
    // if (this.repassword !== this.password) {
    //   this.password = '';
    //   this.repassword = '';
    // }
    const request = { username: this.username, password: this.password, name: this.name, gender: this.selectedSex };
    this._registerService.register(request).subscribe(user => {
      this.user = user;
    });
  }
  ngOnInit() {
  }

}
