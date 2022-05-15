import { Component, OnInit } from '@angular/core';

import { ArrayResponse } from '../../interfaces/film.interfaces';
import { WebServicesService } from '../../services/web-services.service';

@Component({
  selector: 'app-for-tvshows',
  templateUrl: './for-tvshows.component.html',
  styleUrls: ['./for-tvshows.component.scss'],
})
export class ForTVshowsComponent implements OnInit {
  public listSeries = [];
  public seriesSelected: ArrayResponse[] = [];
  public startPage = 0;
  public find: string;

  constructor(private myService: WebServicesService) {}

  public nextPage() {
    if (this.startPage + 6 < this.seriesSelected.length) {
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
      this.listSeries = this.myService.dataParser(resp.entries);
      console.log(this.listSeries[0].return.images.url);
      this.seriesSelected = this.myService.filmType(this.listSeries, 'series');
      console.log(this.listSeries.splice(0, 10));
    });
  }

  enterSearch(value: string) {
    this.find = value;
    console.log(this.find);
  }
}
