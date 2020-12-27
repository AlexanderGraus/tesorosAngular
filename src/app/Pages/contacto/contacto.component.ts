import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactoService } from 'src/app/services/contacto.service';
import{Mensaje} from '../../interfaces/mail';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  formContacto:FormGroup;
  boton:boolean= false;

  constructor(private fb:FormBuilder, private contServ:ContactoService, private ruter:Router) {
    this.formContacto = this.fb.group({
      email:["",[Validators.required, Validators.email]],
      asunto:[""],
      mensaje:["",[Validators.required]]

    });
   }

  mandar(){
    this.boton = true;
    this.contServ.enviar(this.formContacto.get('email').value,
      this.formContacto.get('asunto').value,
      this.formContacto.get('mensaje').value)
    .subscribe(
      (data:Mensaje) =>{
        alert(data.message)
        this.ruter.navigateByUrl('/');
      },
      error=>{
        console.log('Error',error);
      }
    );
  }
  ngOnInit(): void {
  }

}
