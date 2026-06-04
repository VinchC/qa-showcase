import { initialMovies } from "@/data/movies";

import { Movie } from "@/types/movie";

const STORAGE_KEY = "movies";

export function loadMovies(): Movie[] {
  if (typeof window === "undefined") {
    return [];
  }

  const storedMovies = localStorage.getItem(STORAGE_KEY);

  if (!storedMovies) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialMovies));

    return [...initialMovies];
  }

  return JSON.parse(storedMovies);
}

export function saveMovies(movies: Movie[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(movies));
}
