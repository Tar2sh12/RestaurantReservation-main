import { Injectable, OnDestroy } from '@angular/core';
import { ApiRequestsService } from './api-requests.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {
  restaurants!: any[];
  update: boolean = false;
  reservationToUP!: any;
  update1: boolean = false;
  restaurantToUp!: any;
  restarantId!: string;
  private intervalId: any;
  subscription: any;
  constructor(private req: ApiRequestsService) {
    this.getRestaurants();
  }
  getRestaurants(): void {
    this.req.getAllRestaurants().subscribe(async data => {
      await data.restaurants;
      //console.log(data);
      this.restaurants = data.restaurants;
      //console.log(this.restaurants);// Update the restaurants array
    });
    this.intervalId = setInterval(() => {
      // If there's an ongoing subscription, unsubscribe to avoid memory leaks
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
      this.subscription = this.req.getAllRestaurants().subscribe(async data => {
        await data.restaurants;
        this.restaurants = data.restaurants;
        //console.log(this.restaurants);// Update the restaurants array
      });
    }, 1000); // 3000 milliseconds = 3 seconds
  }
  resid!: string;
}
