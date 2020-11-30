import { Component, OnInit } from '@angular/core';
import { Cita, CitasPaginate } from 'src/app/interfaces/Citas';
import { CitasService } from 'src/app/services/citas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  citas:Cita[]=[];
  loading:boolean = true;
  constructor(private citaSrv:CitasService) {
    this.getCitas();
   }

  getCitas(){
    this.citaSrv.getAll().subscribe((data:CitasPaginate)=>{
      this.citas = data.docs;
      this.loading = false;
    },
    error =>{
      console.log('Error',error);
    
    })
  }

  ngOnInit(): void {
  }

}
