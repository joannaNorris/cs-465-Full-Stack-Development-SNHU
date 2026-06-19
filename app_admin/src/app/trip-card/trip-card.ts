import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Trip } from '../models/trip';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-card.html',
  styleUrl: './trip-card.css'
  
})
export class TripCard implements OnInit {
  @Input() trip!: Trip;

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('TripCard::ngOnInit', this.trip);
  }

  public editTrip(trip: Trip): void {
   // localStorage.removeItem('code');
   // localStorage.setItem('code', trip.code);
    this.router.navigate(['/edit-trip', trip.code]);
  }
}
