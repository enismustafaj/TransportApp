import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar-component/navbar.component';

@NgModule({
  declarations: [NavbarComponent],

  exports: [NavbarComponent],
  imports: [RouterModule],
})
export class SharedModule {}
