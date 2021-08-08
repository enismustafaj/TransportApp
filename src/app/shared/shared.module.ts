import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar-component/navbar.component';
import { StopComponent } from './components/stop-component/stop.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NavbarComponent, StopComponent],

  exports: [NavbarComponent, StopComponent],
  imports: [RouterModule, HttpClientModule, CommonModule],
})
export class SharedModule {}
