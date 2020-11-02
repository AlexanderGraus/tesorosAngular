import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  create(user){
    return this.http.post("http://localhost:3000/users/registro",user);
  }
  login(user){
    return this.http.post("http://localhost:3000/users/login",user);
  }
}
