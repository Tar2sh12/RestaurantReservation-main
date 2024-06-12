import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiRequestsService } from '../api-requests.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn = false;
  username?:string;
  role?:string;
  id?:string;
  constructor(private router:Router,private api:ApiRequestsService){


    if(this.isLoggedIn = !!localStorage.getItem('token')){
      let t = JSON.parse(localStorage.getItem('token')!);
      this.username=t.username;
      this.role=t.role;
      this.id=t.id;
    }

}
  users = [{username:'omar',email:"omar@gmail.com",role:"vendor",pass:"123"},
  {username:'heba',email:"heba@gmail.com",role:"vendor",pass:"123"},
  {username:'mohamed',email:"mohamed@gmail.com",role:"customer",pass:"123"},
  {username:'yassmin',email:"yassmin@gmail.com",role:"customer",pass:"123"},
];

  islogedin(): boolean{
    return this.isLoggedIn;
  }



  async login(email:string , pass:string):Promise<boolean>{
    var u ;
    this.api.logIn({ email:email, password: pass}).subscribe(async(data)=>{
      await data;
      u=data;
      this.username=data.user.name;
      this.role=data.user.role;
      this.id=data.user._id;
    });
    // this.users.find((user)=>{
    //   if(user.email==email && user.pass ==pass)
    //   {
    //     return user;
    //   }
    //   return null;
    // })
    // if(u == null)return false;
    // this.username = u.username;
    // this.role = u.role;
    await new Promise(resolve => setTimeout(resolve,100));
    if(u!.message){
      console.log(u!.message);
      return false;
    }
    this.isLoggedIn = true;
    localStorage.setItem('token',JSON.stringify({username:this.username,role:this.role,id:this.id}));
    console.log(u);
    console.log(this.role);
    return true;
  }

  logout(): void {
    this.isLoggedIn = false;
    this.username = undefined;
    this.role = undefined;
    localStorage.removeItem('token');
    this.router.navigate(['/login']);

  }
}
