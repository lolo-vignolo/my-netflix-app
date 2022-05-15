import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ForMoviesComponent } from './pages/for-movies/for-movies.component';
import { ForTVshowsComponent } from './pages/for-tvshows/for-tvshows.component';
import { OpenCardComponent } from './pages/open-card/open-card.component';
import { HomeComponentComponent } from './pages/home-component/home-component.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { SearchComponent } from './components/search/search.component';
import { FiltroPipe } from './pipes/filtro.pipe';

@NgModule({
  declarations: [
    ForMoviesComponent,
    ForTVshowsComponent,
    OpenCardComponent,
    HomeComponentComponent,
    FooterComponent,
    SearchComponent,
    FiltroPipe,
  ],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [
    ForMoviesComponent,
    ForTVshowsComponent,
    OpenCardComponent,
    HomeComponentComponent,
    FooterComponent,
  ],
})
export class TomatoesModule {}
