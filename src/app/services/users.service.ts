import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  routes:string = 'users/';
  authenticationState = new BehaviorSubject((localStorage.getItem("token")?true:false));
  constructor(private http:HttpClient) { }

  create(user){
    return this.http.post(environment.endPointApi+this.routes+'registro',user);
  }
  login(user){
    return this.http.post(environment.endPointApi+this.routes+'login',user);
  }
  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    this.authenticationState.next(false);
  }

  authenticate(token:string,id:string){
    localStorage.setItem('token',token);
    localStorage.setItem('id',id);
    this.authenticationState.next(true);
  }
  isAuthenticate(){
    return this.authenticationState;
  }

  isAuthenticated(){
    return this.authenticationState.value;
  }
}