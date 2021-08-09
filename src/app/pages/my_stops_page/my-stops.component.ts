import { Component, OnDestroy, OnInit } from '@angular/core';
import { Stop } from 'src/app/shared/models/stop.model';
import { BookmarkService } from 'src/app/shared/services/bookmark.service';

@Component({
  selector: 'app-my-stops',
  templateUrl: './my-stops.component.html',
  styleUrls: ['./my-stops.component.css'],
})
export class MyStopsComponent implements OnInit, OnDestroy {
  bookmarks: { [key: string]: Stop } = {};
  constructor(private bookmarkService: BookmarkService) {}
  ngOnInit() {
    this.bookmarkService.getBookmarks().subscribe((bookmarks) => {
      console.log(bookmarks);
      this.bookmarks = bookmarks;
    });
  }
  ngOnDestroy() {}
}
