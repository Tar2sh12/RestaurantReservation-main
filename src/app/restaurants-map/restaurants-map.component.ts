import { Component, OnInit } from '@angular/core';
import { Loader } from "@googlemaps/js-api-loader"
import { RestaurantsService } from '../restaurants.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-restaurants-map',
  templateUrl: './restaurants-map.component.html',
})
export class RestaurantsMapComponent implements OnInit{
  loader = new Loader({
    apiKey: "AIzaSyDFaXNvUSNlqQoqlNBgCgppWcSeYxb5kDM",
    version: "weekly",
  });
  constructor(private res:RestaurantsService,private router:Router){}
  ngOnInit(): void {
    let markers=[];
    let map:any;
    this.loader.load().then(async () => {
      const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
      const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;
      map = new Map(document.getElementById("map") as HTMLElement, {
        center: { lat: 30, lng: 31},
        zoom: 8,
      });
      this.res.restaurants.forEach(element => {
        markers.push(new google.maps.Marker({
          position: { lat: element.latitude, lng: element.longitude },
          map,
          title: element.name,
        }).addListener("click",()=>{
          this.res.resid=element._id;
          this.router.navigate(['/rest']);
        })
        )
      });
     
    });
    
   
  }
}
  
  
  
