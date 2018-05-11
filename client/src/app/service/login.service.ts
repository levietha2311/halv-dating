import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { IUser } from '../auth/user';

@Injectable()
export class LoginService {
  result: any;
  constructor(private _http: HttpClient) { }
  getuser() {
    return this._http.get<IUser[]>('http://localhost:4300/api');
  }
  login(user) {
    return this._http.post<any>('http://localhost:4300/api/login', user)
      .map(data => {
        if (data && data.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return data;
      });
  }
}
