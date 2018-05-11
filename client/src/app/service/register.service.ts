import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { IUser } from '../auth/user';

@Injectable()
export class RegisterService {
    constructor(private _http: HttpClient) { }
    register(user) {
        return this._http.post<IUser>('http://localhost:4300/api/register', user);
    }
}
