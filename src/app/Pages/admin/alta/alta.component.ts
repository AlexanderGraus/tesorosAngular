import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CitasService } from 'src/app/services/citas.service';
import {Cita} from '../../../interfaces/Citas';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {

  myForm:FormGroup;
  constructor(private fb:FormBuilder, private citaServ:CitasService, private route:Router) {
    this.myForm = this.fb.group({
      autor:["",[Validators.required]],
      libro:[""],
      cita:["",[Validators.required]]
    });
   }


  subir(){

    const cita:Cita = {
      user: localStorage.getItem('id'),
      autor: this.myForm.get('autor').value,
      libro: this.myForm.get('libro').value,
      cita: this.myForm.get('cita').value

    }
    this.citaServ.create(cita)
    .subscribe(
      (data:Cita)=>{
        alert('cita subida');
        this.route.navigateByUrl('/admin');

      },
      error =>{
        console.log('Error',error);
      }
    );
  }
  ngOnInit(): void {
  }

  
}
