import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router, RouterState } from '@angular/router';
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
  routerState: any;
  bookmarked: boolean = false;
  bookmarkButtonText: string = '';
  stop: Stop = {} as Stop;
  departures: Departure[] = [];

  departureGroup = new FormGroup({
    when: new FormControl(),
    duration: new FormControl(),
  });

  constructor(
    private stopService: StopService,
    private bookmarksService: BookmarkService,
    private router: Router
  ) {
    if (this.router.getCurrentNavigation()?.extras.state !== undefined) {
      this.routerState = this.router.getCurrentNavigation()?.extras.state;
      if (this.routerState) {
        this.stopId = this.routerState.id;
      }
    }
  }
  async ngOnInit() {
    this.stop = await this.stopService.getStop(this.stopId).toPromise();

    this.bookmarksService.getBookmark(this.stop.id).subscribe((bookmark) => {
      console.log(bookmark);
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
    this.stopService
      .getDepartures(this.stop.id, params)
      .subscribe((departures) => {
        this.departures = departures;
      });
  }

  switchBookmark() {
    if (!this.bookmarked) {
      this.bookmarksService
        .addBookmark(this.stop.id, this.stop)
        .subscribe((res) => {
          this.bookmarked = true;
          this.bookmarkButtonText = 'Remove from bookmarks';
        });
    } else {
      this.bookmarksService.removeBookmark(this.stop.id).subscribe((res) => {
        this.bookmarked = false;
        this.bookmarkButtonText = 'Add to bookmarks';
      });
    }
  }

  ngOnDestroy() {}
}
