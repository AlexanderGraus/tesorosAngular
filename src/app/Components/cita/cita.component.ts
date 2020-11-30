import { Component, Input, OnInit} from '@angular/core';
import { Cita } from 'src/app/interfaces/Citas';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css']
})
export class CitaComponent implements OnInit {

  @Input()
  cita:Cita;
  constructor() {}

  ngOnInit(): void {
  }

}
