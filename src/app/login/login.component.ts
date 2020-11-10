import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm:FormGroup;
  constructor(private fb:FormBuilder, private userServ: UsersService) {
    this.myForm = this.fb.group({
      user:["",[Validators.required]],
      password:["",[Validators.required]]
    });
   }

  login(){
    this.userServ.login(this.myForm.value)
    .subscribe(
      data =>{
        console.log(`Usuario registrado: ${data}`);
        alert('usuario logueado');
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
