import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class UsersService {

  constructor(private http: Http) { }

  getAll(): Observable<any> {
    return this.http.get('http://gifty-env.d52if7qdmy.us-east-1.elasticbeanstalk.com/users/all')
      .map((response: Response) => response.json());
  }

}
