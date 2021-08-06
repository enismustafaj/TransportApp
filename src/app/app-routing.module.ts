import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MyStopsComponent } from './pages/my_stops_page/my-stops.component';
import { SearchComponent } from './pages/search_page/search.component';

const routes: Routes = [
  {
    path: '',
    component: SearchComponent,
  },

  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'my-stops',
    component: MyStopsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
