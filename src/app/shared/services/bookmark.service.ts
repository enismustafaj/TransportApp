import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stop } from '../models/stop.model';

@Injectable({
  providedIn: 'root',
})
export class BookmarkService {
  constructor(private httpClient: HttpClient) {}

  getBookmark(id: string) {
    console.log(id);
    return this.httpClient.get<Stop>(
      `https://real-time-73b5d-default-rtdb.europe-west1.firebasedatabase.app/stops.json`,
      {
        params: {
          id: id,
        },
      }
    );
  }
  getBookmarks(): Observable<{ [k: string]: Stop }> {
    return this.httpClient.get<{ [k: string]: Stop }>(
      'https://real-time-73b5d-default-rtdb.europe-west1.firebasedatabase.app/stops.json'
    );
  }

  addBookmark(id: string, stop: Stop): Observable<boolean> {
    const data = {
      [id]: stop,
    };
    return this.httpClient.put<boolean>(
      `https://real-time-73b5d-default-rtdb.europe-west1.firebasedatabase.app/stops.json`,
      data
    );
  }

  removeBookmark(id: string): Observable<boolean> {
    return this.httpClient.delete<boolean>(
      `https://real-time-73b5d-default-rtdb.europe-west1.firebasedatabase.app/stops.json`,
      {
        params: {
          id: id,
        },
      }
    );
  }
}
