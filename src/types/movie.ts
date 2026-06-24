export type Movie = {
  id: string;
  title: string;
  director: string;
  picture?: string;
  releaseYear: number;
};

export type MovieFormValues = {
  title: string;
  director: string;
  releaseYear: number | null;
};

export type CreateMovieInput = Omit<Movie, "id">;

export type UpdateMovieInput = Partial<Omit<Movie, "id">>;
