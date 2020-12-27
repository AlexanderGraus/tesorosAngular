import { Component, OnInit } from '@angular/core';
import { Cita, CitasPaginate } from 'src/app/interfaces/Citas';
import { CitasService } from 'src/app/services/citas.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  busqueda:string="";

  citas:Cita[]=[];
  loading:boolean = true;
  isLogin:boolean=false;
  id:string;

  constructor(private citaSrv:CitasService,private userServ:UsersService) {
    this.getCitas();
    userServ.isAuthenticate().subscribe(login=>{
      console.log('login',login);
      this.isLogin = login;
    });

    this.id = localStorage.getItem('id');
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
  buscar(){
    this.loading = true;
    this.citaSrv.buscar(this.busqueda).subscribe((data:CitasPaginate)=>{
      this.citas = data.docs;
      this.loading= false;
      
    },
    error=>{
      console.error(error);
      
    });
  }
  eliminar(c:Cita){
    this.citaSrv.delete(c._id).subscribe((data:Cita)=>{
      console.log(data);
      alert('cita eliminada');
      const indice= this.citas.findIndex(id=>id._id == c._id);
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
