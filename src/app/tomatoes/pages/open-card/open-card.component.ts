import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { WebServicesService } from '../../services/web-services.service';

@Component({
  selector: 'app-open-card',
  templateUrl: './open-card.component.html',
  styleUrls: ['./open-card.component.scss'],
})
export class OpenCardComponent implements OnInit {
  public myCard = [];

  public arrayToGetcard = [];
  public arrayCardsworded = [];
  public urlString: string;

  constructor(
    private myService: WebServicesService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      this.urlString = params.id;
    });
    this.myService.getList().subscribe((list) => {
      this.arrayToGetcard = list.entries;
    });

    this.myService.getList().subscribe(() => {
      this.arrayCardsworded = this.myService.dataParser(this.arrayToGetcard);

      this.myCard = this.myService.card(this.arrayCardsworded, this.urlString);
      console.log(this.myCard);
    });
  }
}
