import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navbar-v',
  templateUrl: './navbar-v.component.html',
  styleUrls: ['./navbar-v.component.css']
})
export class NavbarVComponent {
  constructor(private authservice:AuthService){}
  username?: string = this.authservice.username;

  logout(){
    this.authservice.logout();
  }
}
