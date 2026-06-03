export type Movie = {
  id: string;
  title: string;
  director: string;
  picture?: string;
  releaseYear: number;
};

export type CreateMovieInput = Omit<Movie, "id">;

export type UpdateMovieInput = Partial<Omit<Movie, "id">>;
