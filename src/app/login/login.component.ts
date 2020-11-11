import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import {Login} from "../interfaces/Usuarios";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm:FormGroup;
  constructor(private fb:FormBuilder, private userServ: UsersService, private router:Router) {
    this.myForm = this.fb.group({
      user:["",[Validators.required]],
      password:["",[Validators.required]]
    });
   }

  login(){
    this.userServ.login(this.myForm.value)
    .subscribe(
      (data:Login) =>{
        console.log('Usuario registrado:');
        if(data.token){
          alert('usuario logueado');
          localStorage.setItem('token',data.token);
          this.router.navigateByUrl('/');
        }else{
          alert(data.message);
        }
      },
      error =>{
        console.log(`Usuario registrado: ${error}`);
        alert('Error en el registro');
      }
    );
  }
  ngOnInit(): void {
  }

}
