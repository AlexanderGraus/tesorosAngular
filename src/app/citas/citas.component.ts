import { Component, OnInit } from '@angular/core';
import { CitasService } from '../services/citas.service';

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
