import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiRequestsService } from '../api-requests.service';
import { AuthService } from '../auth/auth.service';
import { RestaurantsService } from '../restaurants.service';

@Component({
  selector: 'app-create-restaurant',
  templateUrl: './create-restaurant.component.html',
  styleUrls: ['./create-restaurant.component.css']
})
export class CreateRestaurantComponent {
  constructor(private r: RestaurantsService, private api: ApiRequestsService, private auth: AuthService, private router: Router, private snackbar: MatSnackBar) { }
  rest: any;
  restaurantName?: string;
  description?: string;
  image?: string;
  foodCategory?: string;
  numOfTable?: number;
  numOfSeat?: number;
  timeSlots: string[] = [];
  longitude?: number;
  latitude?: number;
  counter: number = 0;
  divs: number[] = [];
  title: string = "Add New Restaurant";
  buttonText: string = "Create Restaurant";
  update: boolean = false;

  ngOnInit(): void {
    if (this.r.update1) {
      this.update = this.r.update1;
      this.restaurantName = this.r.restaurantToUp.name;
      this.description = this.r.restaurantToUp.description;
      this.timeSlots = this.r.restaurantToUp.timeSlots;
      this.longitude = this.r.restaurantToUp.longitude;
      this.latitude = this.r.restaurantToUp.latitude;
      this.numOfSeat = this.r.restaurantToUp.numSeats;
      this.numOfTable = this.r.restaurantToUp.numTables;
      this.foodCategory = this.r.restaurantToUp.foodCategory;
      this.image = this.r.restaurantToUp.image;
      this.r.update1 = false;

      this.title = "Update Restaurant";
      this.buttonText = "Update";

    }
    setInterval(() => {
      this.rest = this.r.restaurants.find((data) => {
        if (!this.update) return data._id == this.r.restarantId;
        return data._id == this.r.restaurantToUp.restaurantId;
      });
    }, 1000);
  }

  submit() {
    if (!this.update) {
      let data = {
        numSeats: this.numOfSeat,
        timeSlots: this.timeSlots,
        numTables: this.numOfTable,
        vendorId: this.auth.id,
        name: this.restaurantName,
        description: this.description,
        longitude: this.longitude,
        latitude: this.latitude,
        foodCategory: this.foodCategory,
        image: this.image
      };
      console.log(this.api.createRestaurant(data).subscribe(async data => {
        await data;
        console.log(data);
        let snackBarRef = this.snackbar.open('Create Restaurant Completed', 'My Restaurants', { duration: 3000 });
        snackBarRef.onAction().subscribe(() => {
          this.router.navigate(['/myRestaurants']);
        })
        // 
      }));
    }
    else {
      let data = {
        numSeats: this.numOfSeat,
        timeSlots: this.timeSlots,
        numTables: this.numOfTable,
        vendorId: this.auth.id,
        name: this.restaurantName,
        description: this.description,
        longitude: this.longitude,
        latitude: this.latitude,
        foodCategory: this.foodCategory,
        image: this.image,
        restaurantId: this.r.restaurantToUp._id
      };
      console.log(this.api.updateRestaurant(data).subscribe(async data => {
        await data;
        console.log(data);
        let snackBarRef = this.snackbar.open('Update Restaurant Completed', 'My Restaurants', { duration: 3000 });
        snackBarRef.onAction().subscribe(() => {
          this.router.navigate(['/vendor_h']);
        })
        // 
      }));
    }
  }

  async uploadImage (event:any)
  {
    const file = event.target.files[0] as File;
    const formData = new FormData();
    formData.append('image', file, file.name);
    this.api.uploadImage(formData).subscribe(async data=>{
      await data;
      this.image = data.link;
    });

  }

  addtimeSlot() {
    this.counter += 1;
    this.divs.push(0);
  }

  deletetimeSlot(index: number): void {
    if (index >= 0 && index < this.divs.length) {
      this.divs.splice(index, 1);
      this.timeSlots.splice(index, 1);
    }
  }

  choose(cat: string) {
    this.foodCategory = cat;
  }
}
