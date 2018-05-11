import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthServiceProvider {

  constructor(
    public http: Http
  ) {

  }

  validateLogin(obj) {
    return this.http.post('http://localhost:4222/login/validate', obj, { headers: new Headers({ 'Content-Type': 'application/json; charset=utf-8' }) })
      .map((res: Response) => res.json());
  }
}
