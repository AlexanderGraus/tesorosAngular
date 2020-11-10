import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { CitasService } from '../services/citas.service';
import {Cita, CitasPaginate} from '../interfaces/Citas';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {
  citas = [];
  constructor(private citasServ:CitasService) {
    this.citasServ.getAll()
    .subscribe(data=>{
      this.citas = data['docs'];
    },
    error=>{
      console.log('Error:',error);
    }
    );
   }

  ngOnInit(): void {
  }

}
