import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  myForm: FormGroup;
  constructor(private fb: FormBuilder, private userServ: UsersService) {
    this.myForm = this.fb.group({
      user: ["", [Validators.required]],
      nombre: ["", [Validators.required]],
      mail: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}')]]
    });
  }

  registro() {
    console.log(this.myForm.value);
    this.userServ.create(this.myForm.value)
      .subscribe(
        data => {
          console.log("Data del registro", data);
          alert('Usuario registrado');
        },
        error => {
          console.log("Error", error);
          alert('Error en el registro');
        }
      );
  }

  ngOnInit(): void {
  }

}
