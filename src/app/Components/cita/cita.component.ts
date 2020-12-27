import { Component, Input, OnInit, Output} from '@angular/core';
import { EventEmitter } from 'events';
import { Cita } from 'src/app/interfaces/Citas';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css']
})
export class CitaComponent implements OnInit {

  @Input()
  cita:Cita;
  @Output()
  reload = new EventEmitter();
  constructor() {}
  eliminar(){
  
  }

  ngOnInit(): void {
  }

}
