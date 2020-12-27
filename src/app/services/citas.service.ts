import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import {environment} from "../../environments/environment";
import {Cita} from '../interfaces/Citas';

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
  getByUser(user:string){
    return this.http.get(environment.endPointApi+this.route+'?usuario='+user);
  }
  buscar(busqueda:string){
    return this.http.get(environment.endPointApi+this.route+'?buscar='+busqueda);
  }
  create(cita:Cita){
    return this.http.post(environment.endPointApi+this.route,cita);
  }
  update(id:string,cita:Cita){
    return this.http.put(environment.endPointApi+this.route+id,cita);
  }
  delete(id:string){
    return this.http.delete(environment.endPointApi+this.route+id);
  }
}
