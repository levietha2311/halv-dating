import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { IUser } from '../auth/user';

@Injectable()
export class UserService {
    constructor(private _http: HttpClient) {
    }
}
