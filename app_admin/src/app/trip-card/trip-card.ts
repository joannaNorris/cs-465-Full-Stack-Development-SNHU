import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-card.html',
  styleUrl: './trip-card.css'
  
})
export class TripCard implements OnInit {
  @Input() trip!: Trip;

  constructor() {}

  ngOnInit(): void {
  }

}
