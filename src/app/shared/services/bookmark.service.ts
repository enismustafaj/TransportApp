import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stop } from '../models/stop.model';

@Injectable({
  providedIn: 'root',
})
export class BookmarkService {
  constructor(private httpClient: HttpClient) {}

  getBookmarks(): Observable<Stop[]> {
    return this.httpClient.get<Stop[]>(
      'https://real-time-73b5d-default-rtdb.europe-west1.firebasedatabase.app/'
    );
  }

  addBookmark(id: string, stop: Stop): Observable<boolean> {
    return this.httpClient.post<boolean>(
      `https://real-time-73b5d-default-rtdb.europe-west1.firebasedatabase.app/${id}.json`,
      stop
    );
  }
}
