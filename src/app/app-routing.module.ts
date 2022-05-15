import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { ForMoviesComponent } from './tomatoes/pages/for-movies/for-movies.component';
import { ForTVshowsComponent } from './tomatoes/pages/for-tvshows/for-tvshows.component';
import { HomeComponentComponent } from './tomatoes/pages/home-component/home-component.component';
import { OpenCardComponent } from './tomatoes/pages/open-card/open-card.component';

const routes: Routes = [
  { path: '', component: HomeComponentComponent, pathMatch: 'full' },
  { path: 'login', component: ForMoviesComponent },
  { path: 'movie', component: ForMoviesComponent },
  { path: 'series', component: ForTVshowsComponent },
  { path: ':id', component: OpenCardComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
