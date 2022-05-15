export interface FilmResponse {
  total: number;
  entries: Film[];
}

export interface Film {
  title: string;
  description: string;
  programType: ProgramType;
  images: Images;
  releaseYear: number;
}

export interface Images {
  posterArt: PosterArt;
}
export interface PosterArt {
  url: string;
  width: number;
  height: number;
}

export interface ProgramType {
  movie: 'movie';
  series: 'Series';
}

export interface ArrayResponse {
  return: ObjectFiles;
}

export interface ObjectFiles {
  description: string;
  images: Image;
  releaseYear: number;
  programType: string;
  title: string;
}

export interface Image {
  url: string;
  width: number;
  height: number;
}
