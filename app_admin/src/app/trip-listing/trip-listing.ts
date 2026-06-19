import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trips } from '../data/trips';
import { TripCard } from '../trip-card/trip-card';
import { Trip } from '../models/trip';
import { TripData } from '../services/trip-data';
import { Router } from '@angular/router';

@Component({
  //providers: [TripData],
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCard],
  templateUrl: './trip-listing.html',
  styleUrl: './trip-listing.css',
})


export class TripListing implements OnInit {
  // trips: Array<any> = trips;
  //trips: Array<any> = [];
  trips: Trip[] = [];
  message: string = '';

  constructor(
    private tripData: TripData, 
    private router: Router) {
    console.log('tripData instance:', this.tripData);
  }

  public addTrip(): void {
    this.router.navigate(['add-trip']);
  }

  private getStuff(): void {
    this.tripData.getTrips().subscribe({
      next: (value: Trip[]) => {
        console.log('API RESPONSE:', value);
        console.log('tripData.getTrips exists:', this.tripData.getTrips );

        this.trips = [...value];

        if (value.length > 0) {
          this.message = 'There are ' + value.length + ' trips available.';
        } else {
          this.message = 'No trips were retrieved from this database.';
        }
        console.log(this.message);
      },
      error: (error: any) => {
        console.error('Error: ' + error);
      }
    })
  }

  ngOnInit(): void {
    console.log('trip-listing ngOnInit');
    this.getStuff();  
  }
}
