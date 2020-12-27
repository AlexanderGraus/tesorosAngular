import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cita } from 'src/app/interfaces/Citas';
import { CitasService } from 'src/app/services/citas.service';

@Component({
  selector: 'app-modif',
  templateUrl: './modif.component.html',
  styleUrls: ['./modif.component.css']
})
export class ModifComponent implements OnInit {
  myForm:FormGroup;
  cita:Cita;
  id:string;
  constructor(private fb:FormBuilder, 
    private citaServ:CitasService, 
    private route:ActivatedRoute, 
    private router:Router) {
    
    this.id = route.snapshot.paramMap.get('id');
    citaServ.getById(this.id).subscribe((data:Cita)=>{
      console.log('data',data);
      this.cita = data;
      
      this.myForm = this.fb.group({
        autor:[this.cita.autor,[Validators.required]],
        libro:[this.cita.libro],
        cita:[this.cita.cita,[Validators.required]]
      });
    },
    error=>{
      console.log('ERROR',error);
    });

   }


  subir(){

    const cita:Cita = {
      user: localStorage.getItem('id'),
      autor: this.myForm.get('autor').value,
      libro: this.myForm.get('libro').value,
      cita: this.myForm.get('cita').value

    }
    this.citaServ.update(this.id,cita)
    .subscribe(
      (data:Cita)=>{
        alert('cita modificicada');
        this.router.navigateByUrl('/admin');
        

      },
      error =>{
        console.log('Error',error);
      }
    );
  }
  ngOnInit(): void {
  }

}
