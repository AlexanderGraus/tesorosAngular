import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CitaComponent } from './cita/cita.component';
import { CitasComponent } from './citas/citas.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {path:"",component:CitasComponent},
  {path:"cita/:id",component:CitaComponent},
  {path:"contacto",component:ContactoComponent},
  {path:'registro',component:RegistroComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
