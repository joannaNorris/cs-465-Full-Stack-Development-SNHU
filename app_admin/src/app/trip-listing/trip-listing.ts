import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trips } from '../data/trips';
import { TripCard } from '../trip-card/trip-card';
import { Trip } from '../models/trip';
import { TripData } from '../services/trip-data';

@Component({
  providers: [TripData],
  selector: 'app-trip-listing',
  imports: [CommonModule, TripCard],
  templateUrl: './trip-listing.html',
  styleUrl: './trip-listing.css',
})


export class TripListing implements OnInit {
  trips: Array<any> = trips;
  message: string = '';

  constructor(private tripData: TripData) {
    console.log('trip-listing constructor');
  }

  private getStuff(): void {
    this.tripData.getTrips().subscribe({
      next: (value: any) => {
        this.trips = value;
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
