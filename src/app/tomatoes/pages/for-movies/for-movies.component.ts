import { Component, OnInit } from '@angular/core';

import { ArrayResponse } from '../../interfaces/film.interfaces';
import { WebServicesService } from '../../services/web-services.service';

@Component({
  selector: 'app-for-movies',
  templateUrl: './for-movies.component.html',
  styleUrls: ['./for-movies.component.scss'],
})
export class ForMoviesComponent implements OnInit {
  public listMovies = [];
  public movieSelected: ArrayResponse[] = [];
  public startPage = 0;
  public find: string;
  public arrayFromPipe = [];

  constructor(private myService: WebServicesService) {}

  public nextPage() {
    if (this.startPage + 6 < this.movieSelected.length) {
      this.startPage += 6;
    }
  }

  public backPage() {
    if (this.startPage > 0) {
      this.startPage -= 6;
    }
  }

  ngOnInit(): void {
    this.myService.getList().subscribe((resp) => {
      this.listMovies = this.myService.dataParser(resp.entries);
      this.movieSelected = this.myService.filmType(this.listMovies, 'movie');

      console.log(this.movieSelected);
    });
  }

  enterSearch(value: string) {
    this.find = value;
  }
}
