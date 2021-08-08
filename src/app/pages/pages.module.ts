import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MyStopsComponent } from './my_stops_page/my-stops.component';
import { SearchComponent } from './search_page/search.component';

@NgModule({
  declarations: [MyStopsComponent, SearchComponent],
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [MyStopsComponent, SearchComponent],
  providers: [],
})
export class PagesModule {}
