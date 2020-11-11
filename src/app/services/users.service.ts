import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  routes:string = 'users/';
  constructor(private http:HttpClient) { }

  create(user){
    return this.http.post(environment.endPointApi+this.routes+'registro',user);
  }
  login(user){
    return this.http.post(environment.endPointApi+this.routes+'login',user);
  }
}
