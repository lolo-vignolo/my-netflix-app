import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

import { WebServicesService } from '../../services/web-services.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Output() enter = new EventEmitter();
  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;

  public setSelected: string;
  get history() {
    return this.webServices.myHistory;
  }
  constructor(private webServices: WebServicesService) {}

  change(value: string) {
    this.enter.emit(value);
  }

  lastView() {
    let value = this.txtSearch.nativeElement.value;

    if (value.trim().length === 0) {
      return;
    }
    this.webServices.searcher(value);
    this.txtSearch.nativeElement.value = '';
    value = '';
    this.change('');
  }
}
