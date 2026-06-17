import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Trip } from '../models/trip';

@Injectable({
    providedIn: 'root'
})

export class TripData { 
    constructor(private http: HttpClient) { }

    getTrips(): Observable<Trip[]> {
        let url = '/api/trips';
        return this.http.get<Trip[]>(url);
    }

    getTripById(id: string): Observable<Trip> {
        return this.http.get<Trip>(`/api/trips/${id}`);
    }
}
