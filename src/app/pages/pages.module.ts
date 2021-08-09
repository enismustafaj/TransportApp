import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { InfoComponent } from './info-page/info.component';
import { MyStopsComponent } from './my_stops_page/my-stops.component';
import { SearchComponent } from './search_page/search.component';

@NgModule({
  declarations: [MyStopsComponent, SearchComponent, InfoComponent],
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [MyStopsComponent, SearchComponent, InfoComponent],
  providers: [],
})
export class PagesModule {}
