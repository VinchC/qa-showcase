import { initialMovies } from "@/data/movies";
import { Movie, CreateMovieInput, UpdateMovieInput } from "@/types/movie";

class MovieService {
  private movies: Movie[];

  constructor() {
    this.movies = [...initialMovies];
  }

  /* Affiche l'ensemble des films */
  getAllMovies(): Movie[] {
    return [...this.movies];
  }

  /* Affiche un film grâce à son ID */
  getMovieById(id: string): Movie | undefined {
    return this.movies.find((movie) => movie.id === id);
  }

  /* Recherche un film par son titre */
  searchMovies(searchQuery: string): Movie[] {
    const query = searchQuery.trim().toLowerCase();

    if (!query) {
      return [...this.movies];
    }

    return this.movies.filter((movie) =>
      movie.title.toLowerCase().includes(query),
    );
  }

  /* Création d'un film */
  createMovie(input: CreateMovieInput): Movie {
    const newMovie: Movie = {
      id: crypto.randomUUID(),
      ...input,
    };

    this.movies.push(newMovie);

    return newMovie;
  }

  /* Mettre à jour un film existant */
  updateMovie(id: string, updates: UpdateMovieInput): Movie | null {
    const movieIndex = this.movies.findIndex((movie) => movie.id === id);

    if (movieIndex === -1) {
      return null;
    }

    this.movies[movieIndex] = {
      ...this.movies[movieIndex],
      ...updates,
    };

    return this.movies[movieIndex];
  }

  /* Supprimer un film */
  deleteMovie(id: string): boolean {
    const initialLength = this.movies.length;

    this.movies = this.movies.filter((movie) => movie.id !== id);

    return this.movies.length < initialLength;
  }

  /* Réinitialisation des trois films du fichier @/data/movies.ts */
  resetMovies(): void {
    this.movies = [...initialMovies];
  }
}

export const movieService = new MovieService();
