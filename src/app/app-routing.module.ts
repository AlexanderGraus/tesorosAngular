import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { CitaComponent } from './Components/cita/cita.component';
import { CitasComponent } from './Components/citas/citas.component';
import { ContactoComponent } from './Pages/contacto/contacto.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegistroComponent } from './Pages/registro/registro.component';
import { AdminComponent } from './Pages/admin/admin.component';
import { AltaComponent } from './Pages/admin/alta/alta.component';
import { ModifComponent } from './Pages/admin/modif/modif.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"contacto",component:ContactoComponent},
  {path:'registro',component:RegistroComponent},
  {path:'login',component:LoginComponent},
  {path:'admin',canActivate:[AuthGuard],component:AdminComponent},
  {path:'admin/alta',canActivate:[AuthGuard],component:AltaComponent},
  {path:'admin/modif/:id',canActivate:[AuthGuard],component:ModifComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
