"use client";

import { useRouter } from "next/navigation";

import { useParams } from "next/navigation";

import MovieForm from "@/components/MovieForm";

import { MovieFormValues } from "@/types/movie";

import { movieService } from "@/services/movieService";

export default function EditMovieClient() {
  const router = useRouter();

  const params = useParams();

  const movie = movieService.getMovieById(params.id as string);

  if (!movie) {
    return (
      <main className="max-w-2xl mx-auto p-6">Ce film n&apos;existe pas</main>
    );
  }

  const handleUpdateMovie = async (values: MovieFormValues) => {
    movieService.updateMovie(movie.id, values);

    router.push(`/movies/${movie.id}`);
  };

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Modifier le film</h1>

      <MovieForm initialMovie={movie} onSubmit={handleUpdateMovie} />
    </main>
  );
}
