import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import{Email} from '../interfaces/mail';
@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  route:string='contacto/';
  constructor(private http:HttpClient) { }
  enviar(email:string,asunto:string,mensaje:string){
    const body:Email ={
      mail: email,
      asunto: asunto,
      mensaje: mensaje
    };

    return this.http.post(environment.endPointApi+this.route,body);
  }
}
