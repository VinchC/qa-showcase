"use client";

import { Movie, MovieFormValues } from "@/types/movie";
import { useMovieForm } from "@/hooks/useMovieForm";

import ErrorMessage from "@/components/ErrorMessage";
import LoadingSpinner from "@/components/LoadingSpinner";
import { generateYears } from "@/utils/generateYears";
import { MOVIE_RULES } from "@/constants/movieRules";

type MovieFormProps = {
  initialMovie?: Movie;

  onSubmit: (values: MovieFormValues) => Promise<void>;
};

export default function MovieForm({ initialMovie, onSubmit }: MovieFormProps) {
  const {
    title,
    director,
    errors,
    releaseYear,
    isLoading,

    setTitle,
    setDirector,
    setReleaseYear,
    handleSubmit,
  } = useMovieForm({
    initialMovie,
    onSubmit,
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const years = generateYears();

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
      data-testid="movie-form"
    >
      {errors.map((error) => (
        <ErrorMessage key={error} message={error} />
      ))}

      <div>
        <label htmlFor="title" className="block mb-1">
          Titre
        </label>

        <input
          id="title"
          className="border p-2 w-full"
          maxLength={MOVIE_RULES.MAX_TITLE_LENGTH}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          data-testid="movie-title"
        />
      </div>

      <div>
        <label htmlFor="director" className="block mb-1">
          Réalisateur-rice
        </label>

        <input
          id="director"
          className="border p-2 w-full"
          value={director}
          onChange={(e) => setDirector(e.target.value)}
          data-testid="movie-director"
        />
      </div>

      <div>
        <label htmlFor="releaseYear" className="block mb-1">
          Année de sortie
        </label>
        <select
          id="releaseYear"
          className="border p-2 w-full"
          value={releaseYear || ""}
          onChange={(e) => setReleaseYear(Number(e.target.value))}
          data-testid="movie-release-year"
        >
          <option value="">Sélectionner</option>
          {years.map((year) => (
            <option key={year} value={year} className="text-black">
              {year}
            </option>
          ))}
        </select>

        {/* <input
          id="releaseYear"
          type="number"
          min={1895}
          max={CURRENT_YEAR}
          step={1}
          className="border p-2 w-full"
          value={releaseYear}
          onChange={(e) => setReleaseYear(Number(e.target.value))}
          data-testid="movie-release-year"
        /> */}
      </div>

      <button
        type="submit"
        className="border rounded px-4 py-2"
        data-testid="save-movie"
      >
        Enregistrer
      </button>
    </form>
  );
}
