import { Pipe, PipeTransform } from '@angular/core';
import { ArrayResponse } from '../interfaces/film.interfaces';

@Pipe({
  name: 'filtro',
})
export class FiltroPipe implements PipeTransform {
  transform(
    items: ArrayResponse[],
    pagination: number = 0,
    findFilm: string = ''
  ): any[] {
    if (findFilm.length === 0) {
      return items.slice(pagination, pagination + 8);
    }
    const filtered = items.filter((item) =>
      item.return.title.toLowerCase().includes(findFilm.toLowerCase())
    );
    if (filtered.length === 0) {
      return [
        {
          return: {
            images: { url: 'assets/notFound.png' },
            title: 'No hay resultados',
          },
        },
      ];
    }

    return filtered.slice(pagination, pagination + 8);
  }
}
