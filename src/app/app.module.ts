import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CitasComponent } from './Components/citas/citas.component';
import { CitaComponent } from './Components/cita/cita.component';
import { ContactoComponent } from './Pages/contacto/contacto.component';
import { RegistroComponent } from './Pages/registro/registro.component';
import { LoginComponent } from './Pages/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { HomeComponent } from './Pages/home/home.component';
import { AdminComponent } from './Pages/admin/admin.component';
import { InterceptorsService } from './interceptors.service';
import { AltaComponent } from './Pages/admin/alta/alta.component';
import { ModifComponent } from './Pages/admin/modif/modif.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    CitasComponent,
    CitaComponent,
    ContactoComponent,
    RegistroComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    AltaComponent,
    ModifComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,MatButtonModule,MatInputModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:InterceptorsService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
