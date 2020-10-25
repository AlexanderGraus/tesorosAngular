import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css']
})
export class CitaComponent implements OnInit {
  cita = {
    id:1,
    autor: "Nicole Graus",
    libro: "",
    cita: "O sos careta o sos antisocial, vos elegís"
  };
  constructor() { }

  ngOnInit(): void {
  }

}
