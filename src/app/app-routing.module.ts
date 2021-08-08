import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InfoComponent } from './pages/info-page/info.component';
import { MyStopsComponent } from './pages/my_stops_page/my-stops.component';
import { SearchComponent } from './pages/search_page/search.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/search',
  },

  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'my-stops',
    component: MyStopsComponent,
  },
  {
    path: 'info/:id',
    component: InfoComponent,
    data: {
      id: ':id',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
