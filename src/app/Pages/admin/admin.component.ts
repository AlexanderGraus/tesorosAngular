import { Component, OnInit } from '@angular/core';
import { Cita, CitasPaginate } from 'src/app/interfaces/Citas';
import { CitasService } from 'src/app/services/citas.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  citas:Cita[]=[];
  loading:boolean = true;
  constructor(private citaSrv:CitasService) {
    this.getCitas();
   }

  getCitas(){
    const user:string = localStorage.getItem('id');
    this.citaSrv.getByUser(user).subscribe((data:CitasPaginate)=>{
      this.citas = data.docs;
      
      this.loading = false;
    },
    error =>{
      console.log('Error',error);
    
    })
  }

  eliminar(c:Cita){
    console.log(c);
    this.citaSrv.delete(c._id).subscribe((data:Cita)=>{
      console.log(data);
      alert('cita eliminada');
      // this.getCitas();
      const indice= this.citas.findIndex(id=>id._id == c._id);
      //borro la cita para que desaparezca de la vista
      this.citas.splice(indice,1);
      
    },
    error=>{
      console.log('Error',error);
    }

    );
  }
  ngOnInit(): void {
  }

}
