import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CitaComponent } from './Components/cita/cita.component';
import { CitasComponent } from './Components/citas/citas.component';
import { ContactoComponent } from './Pages/contacto/contacto.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegistroComponent } from './Pages/registro/registro.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
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
