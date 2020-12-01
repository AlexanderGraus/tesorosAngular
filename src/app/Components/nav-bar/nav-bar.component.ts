import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isLogin:boolean=false;
  constructor(private usrServ:UsersService) {
    usrServ.isAuthenticate().subscribe(login=>{
      console.log('login',login);
      this.isLogin = login;
    });
   }

  ngOnInit(): void {
  }

}
