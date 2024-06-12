import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiRequestsService } from '../api-requests.service';
import { AuthService } from '../auth/auth.service';
import { RestaurantsService } from '../restaurants.service';

@Component({
  selector: 'app-v-restaurant',
  templateUrl: './v-restaurant.component.html',
  styleUrls: ['./v-restaurant.component.css']
})
export class VRestaurantComponent implements OnInit {
  restaurants: any[] = [];
  r_array: any[] = [];
  reservations!:any[];
  constructor(private restaurant: RestaurantsService, private router: Router, private auth: AuthService, private snackbar: MatSnackBar, private api: ApiRequestsService) { }

  ngOnInit() {
    // this.s_array = this.restaurant.vendorRestruants;
    // console.log(this.s_array);
    this.restaurants = [];
      this.restaurant.restaurants.forEach(element => {
        if (element.vendorId == this.auth.id) {
          this.restaurants.push(element);
        }
      });
      this.api.getVendorReservations({vendorId : this.auth.id}).subscribe(async data=>{
        await data
       this.reservations = data.allReservations;
        //console.log(data);
      });
  }


  updateRestaurant(i: number) {
    this.restaurant.restaurantToUp = this.restaurants[i];
    this.restaurant.update1 = true;
    this.router.navigate(['/create-restaurant-v']);
  }
  async deleteRestaurant(i: number) {
    const r = this.restaurants[i];
    console.log(r);
    // const n=this.restName[i];
    let bool: boolean = false;
    this.restaurants.splice(i, 1);
    // this.restName.splice(i,1);
    let snackBarRef = this.snackbar.open('Restaurant Deleted', 'Undo', { duration: 1000 });
    snackBarRef.onAction().subscribe(() => {
      this.restaurants.splice(i, 0, r);
      // this.restName.splice(i,0,n);
      bool = true;
    })
    await new Promise(resolve => {
      setTimeout(resolve, 1000);
    })
    console.log(r._id);
    console.log(this.reservations);
    if (!bool) {
        this.reservations.forEach(res => {
          if(r._id == res.restaurantId)
          {
            this.api.deleteReservation({reservationId :res._id}).subscribe(data=>console.log("delete : "+data));
            console.log(r._id);
          }
        });
      this.api.deleteRestaurant({ restaurantId: r._id }).subscribe(data => {
        console.log(data);
      });
    }
  }
}
