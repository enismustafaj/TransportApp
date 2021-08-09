import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stop } from '../models/stop.model';

@Injectable({
  providedIn: 'root',
})
export class StopService {
  constructor(private httpClient: HttpClient) {}
  getStops(queryValue: string): Observable<Stop[]> {
    return this.httpClient.get<Stop[]>(
      'https://v5.vbb.transport.rest/locations',
      {
        params: {
          query: queryValue,
        },
      }
    );
  }

  getStop(stopId: string): Observable<Stop> {
    return this.httpClient.get<Stop>(
      `https://v5.vbb.transport.rest/stops/${stopId}`
    );
  }

  getDepartures(stopId: string): Observable<any> {
    return this.httpClient.get<any>(
      `https://v5.vbb.transport.rest/stops/${stopId}/departures`
    );
  }
}
