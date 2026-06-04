import { loadMovies, saveMovies } from "@/services/movieStorage";

import { Movie, CreateMovieInput, UpdateMovieInput } from "@/types/movie";

class MovieService {
  getAllMovies(): Movie[] {
    return loadMovies();
  }

  getMovieById(id: string): Movie | undefined {
    return loadMovies().find((movie) => movie.id === id);
  }

  searchMovies(searchTerm: string): Movie[] {
    const movies = loadMovies();

    const normalizedTerm = searchTerm.trim().toLowerCase();

    if (!normalizedTerm) {
      return movies;
    }

    return movies.filter((movie) =>
      movie.title.toLowerCase().includes(normalizedTerm),
    );
  }

  createMovie(input: CreateMovieInput): Movie {
    const movies = loadMovies();

    const newMovie = {
      id: crypto.randomUUID(),
      ...input,
    };

    movies.push(newMovie);

    saveMovies(movies);

    return newMovie;
  }

  updateMovie(id: string, updates: UpdateMovieInput): Movie | null {
    const movies = loadMovies();

    const index = movies.findIndex((movie) => movie.id === id);

    if (index === -1) {
      return null;
    }

    movies[index] = {
      ...movies[index],
      ...updates,
    };

    saveMovies(movies);

    return movies[index];
  }

  deleteMovie(id: string): boolean {
    const movies = loadMovies();

    const filteredMovies = movies.filter((movie) => movie.id !== id);

    saveMovies(filteredMovies);

    return filteredMovies.length < movies.length;
  }

  resetMovies() {
    saveMovies([]);
  }
}

export const movieService = new MovieService();
