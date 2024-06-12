import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiRequestsService } from '../api-requests.service';
import { AuthService } from '../auth/auth.service';
import { RestaurantsService } from '../restaurants.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-c-reservations',
  templateUrl: './c-reservations.component.html',
  styleUrls: ['./c-reservations.component.css']
})
export class CReservationsComponent {
  res:any[]=[];
  restName:any[]=[];
  constructor(private router:Router,private api:ApiRequestsService,private auth:AuthService,private rest:RestaurantsService,private snackbar:MatSnackBar){
    api.getAllReservation({customerId:auth.id}).subscribe(async (data)=>{
      await data;
      console.log(data);
      this.res= data.reservations;
      for(let i=0;i<this.res.length;i++){
        api.getRestaurant({restaurantId:this.res[i].restaurantId}).subscribe(async (data)=>{
          await data;
        console.log(data);
        this.restName[i]=data.restaurant.name;
        })
      }
    })
    setInterval((()=>{
      api.getAllReservation({customerId:auth.id}).subscribe(async (data)=>{
        await data;
        console.log(data);
        this.res= data.reservations;
        for(let i=0;i<this.res.length;i++){
          api.getRestaurant({restaurantId:this.res[i].restaurantId}).subscribe(async (data)=>{
            await data;
          console.log(data);
          this.restName[i]=data.restaurant.name;
          })
        }
      })
    }),6000)
    
  }
  restr:any[]=this.rest.restaurants;
  updateRes(i:number)
  { 
    this.rest.reservationToUP=this.res[i];
    this.rest.update = true;
    this.router.navigate(['/rest']);
    
  }
  async deleteRes(i:number)
  {

    const r=this.res[i];
    console.log(r);
    const n=this.restName[i];
    let bool:boolean=false;
    this.res.splice(i,1);
    this.restName.splice(i,1);
    let snackBarRef = this.snackbar.open('Reservation Canceled','Undo',{duration: 3000});
    snackBarRef.onAction().subscribe(()=>{
      this.res.splice(i,0,r);
      this.restName.splice(i,0,n);
      bool=true;
    })
    await new Promise(resolve=>{
      setTimeout(resolve,2000);
    })
    console.log(r._id);
    if(!bool)
    {
      let restaurant:any;
      this.rest.restaurants.forEach(res=>{
        if(res._id == r.restaurantId)
        {
          console.log(res.numSeats);
          restaurant=res;
          return ;
        }
      });
      console.log(Math.floor((r.numberOfSeats + (restaurant.numSeats-1)) / restaurant.numSeats));
      let tablesToAdd = Math.floor((r.numberOfSeats + (restaurant.numSeats-1)) / restaurant.numSeats);
      const tablesToUpdate =  restaurant.numTables + tablesToAdd;
      this.api.deleteReservation({reservationId:r._id}).subscribe(data=>{
      console.log(data);
      this.api.updateRestaurant({restaurantId:restaurant._id,numTables:tablesToUpdate}).subscribe();
    });}
  }
}
