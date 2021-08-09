import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Departure } from 'src/app/shared/models/departure.model';
import { Stop } from 'src/app/shared/models/stop.model';
import { BookmarkService } from 'src/app/shared/services/bookmark.service';
import { StopService } from 'src/app/shared/services/stop.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit, OnDestroy {
  stopId: string = '';
  bookmarked: boolean = false;
  bookmarkButtonText: string = '';
  stop: Stop = {} as Stop;
  departures: Departure[] = [];

  bookmarkSubscription: Subscription | undefined;
  departureSubscription: Subscription | undefined;
  switchBookmarkSubscription: Subscription | undefined;

  departureGroup = new FormGroup({
    when: new FormControl(),
    duration: new FormControl(),
  });

  constructor(
    private stopService: StopService,
    private bookmarksService: BookmarkService
  ) {
    const id = window.localStorage.getItem('stopId');
    this.stopId = id ? id : '';
  }
  async ngOnInit() {
    this.stop = await this.stopService.getStop(this.stopId).toPromise();

    this.bookmarkSubscription = this.bookmarksService
      .getBookmark(this.stop.id)
      .subscribe((bookmark) => {
        if (bookmark) {
          this.bookmarked = true;
          this.bookmarkButtonText = 'Remove from bookmarks';
        } else {
          this.bookmarked = false;
          this.bookmarkButtonText = 'Add to bookmarks';
        }
      });
  }

  showDepartures() {
    let params: { [k: string]: any } = {};
    if (this.departureGroup.value.when) {
      params['when'] = this.departureGroup.value.when;
    }
    if (this.departureGroup.value.duration) {
      params['duration'] = this.departureGroup.value.duration;
    }
    this.departureSubscription = this.stopService
      .getDepartures(this.stop.id, params)
      .subscribe((departures) => {
        this.departures = departures;
      });
  }

  switchBookmark() {
    if (!this.bookmarked) {
      this.switchBookmarkSubscription = this.bookmarksService
        .addBookmark(this.stop.id, this.stop)
        .subscribe((res) => {
          this.bookmarked = true;
          this.bookmarkButtonText = 'Remove from bookmarks';
        });
    } else {
      this.switchBookmarkSubscription = this.bookmarksService
        .removeBookmark(this.stop.id)
        .subscribe((res) => {
          this.bookmarked = false;
          this.bookmarkButtonText = 'Add to bookmarks';
        });
    }
  }

  ngOnDestroy() {
    if (this.bookmarkSubscription) {
      this.bookmarkSubscription.unsubscribe();
    }
    if (this.departureSubscription) {
      this.departureSubscription.unsubscribe();
    }
    if (this.switchBookmarkSubscription) {
      this.switchBookmarkSubscription.unsubscribe();
    }
  }
}
