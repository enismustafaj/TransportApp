import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterState } from '@angular/router';
import { Stop } from 'src/app/shared/models/stop.model';
import { StopService } from 'src/app/shared/services/stop.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit, OnDestroy {
  stopId: string = '';
  routerState: any;

  stop: Stop = {} as Stop;
  constructor(
    private stopService: StopService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    if (this.router.getCurrentNavigation()?.extras.state !== undefined) {
      this.routerState = this.router.getCurrentNavigation()?.extras.state;
      if (this.routerState) {
        this.stopId = this.routerState.id;
      }
    }
  }
  ngOnInit() {
    this.stopService.getStop(this.stopId).subscribe((stop) => {
      this.stop = stop;
    });
  }
  ngOnDestroy() {}
}
