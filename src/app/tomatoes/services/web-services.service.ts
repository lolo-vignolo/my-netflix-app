import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
  ArrayResponse,
  Film,
  FilmResponse,
} from '../interfaces/film.interfaces';

@Injectable({
  providedIn: 'root',
})
export class WebServicesService {
  //public resultData: Film[] = [];

  public movie: string;

  private history: string[] = [];

  get myHistory() {
    return [...this.history];
  }

  constructor(private http: HttpClient) {
    if (localStorage.getItem('history')) {
      this.history = JSON.parse(localStorage.getItem('history'));
    }
  }

  getList() {
    return this.http.get<FilmResponse>(
      'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/data.json'
    );
  }

  dataParser(list: Film[]) {
    return list.map(
      ({ title, description, programType, images, releaseYear }) => ({
        return: {
          title,
          description,
          programType,
          images: images['Poster Art'],
          releaseYear,
        },
      })
    );
  }

  filmType(list: any[], type: string): ArrayResponse[] {
    return list.filter((film) => film.return.programType === type);
  }

  card(list: any[], title: string): ArrayResponse[] {
    return list.filter((film) => film.return.title === title);
  }

  searcher(search: string) {
    this.history.unshift(search);
    this.history = this.history.splice(0, 1);
    localStorage.setItem('history', JSON.stringify(this.history));
  }
}
