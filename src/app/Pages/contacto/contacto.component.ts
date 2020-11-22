import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  formContacto:FormGroup;
  constructor(private fb:FormBuilder) {
    this.formContacto = this.fb.group({
      email:["",[Validators.required, Validators.email]],
      asunto:["Mensaje enviado desde Tesoros Impresos"],
      mensaje:["",[Validators.required]]

    });
   }

  ngOnInit(): void {
  }

}
