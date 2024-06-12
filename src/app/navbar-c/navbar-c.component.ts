import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navbar-c',
  templateUrl: './navbar-c.component.html',
  styleUrls: ['./navbar-c.component.css']
})
export class NavbarCComponent {
  constructor(private authservice:AuthService){}
  username?: string = this.authservice.username;

  logout(){
    this.authservice.logout();
  }
}
