import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../restaurants.service';
import { Router } from '@angular/router';
import { ApiRequestsService } from '../api-requests.service';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.css']
})
export class CustomerHomeComponent implements OnInit{
  restaurants?:any[]=[];
  s_array:any[]=[]
  s_text!:string;
  cat_filter:string='None';
  constructor (private restaurant:RestaurantsService,private router:Router,private req:ApiRequestsService){
    
  }
  ngOnInit()
  {
    setInterval(()=>{
      if(!this.s_text&&this.cat_filter=='None'){if(this.restaurants! !== this.restaurant.restaurants)this.restaurants = this.restaurant.restaurants;this.s_array= this.restaurant.restaurants}
      else {
        this.s_array=[];
        this.restaurants!.forEach(element => {
          if(this.s_text && this.cat_filter=='None'){
          if(element.name.toLowerCase().includes(this.s_text.toLowerCase()))
          {
            this.s_array.push(element);
          }
        }
        if(this.s_text && this.cat_filter!='None')
        {
          if(element.name.toLowerCase().includes(this.s_text.toLowerCase()) && this.cat_filter == element.foodCategory)
          {
            this.s_array.push(element);
          }
        }
        if(!this.s_text && this.cat_filter!='None')
        {
          if(this.cat_filter == element.foodCategory)
          {
            this.s_array.push(element);
          }
        }

        });
      }
    },1000); 
  }

  gotores(id:string){
    console.log("clicked");
    this.restaurant.resid = id;
    console.log(id);
    this.router.navigate(['/rest']);
  }
  choose(cat:string)
  {
    this.cat_filter= cat;
  }
}
