import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Stop } from '../../models/stop.model';

@Component({
  selector: 'app-stop',
  templateUrl: './stop.component.html',
  styleUrls: ['./stop.component.css'],
})
export class StopComponent {
  @Input() stop: Stop = {} as Stop;

  constructor(private router: Router) {}

  showInfo(id: string) {
    console.log(id);
    this.router.navigate(['/info', id], { state: { id: id } });
  }
}
