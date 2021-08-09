import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Stop } from 'src/app/shared/models/stop.model';
import { StopService } from 'src/app/shared/services/stop.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit, OnDestroy {
  constructor(private stopService: StopService) {}
  form = new FormGroup({
    search: new FormControl(''),
  });

  results: Stop[] = [];
  stopSubscription: Subscription | undefined;
  noResult: boolean = false;

  ngOnInit() {}

  searchStops() {
    this.stopSubscription = this.stopService
      .getStops(this.form.value.search)
      .subscribe((res) => {
        if (res.length === 0) {
          this.noResult = true;
        }
        this.results = res;
      });
  }

  ngOnDestroy() {
    if (this.stopSubscription) {
      this.stopSubscription.unsubscribe();
    }
  }
}
