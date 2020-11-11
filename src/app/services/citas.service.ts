import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  route:string = 'citas/';
  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(environment.endPointApi+this.route);
  }
  getById(id:string){
    return this.http.get(environment.endPointApi+this.route+id);
  }
}
