"use client";

import { useRouter } from "next/navigation";
import MovieForm from "@/components/MovieForm";
import { movieService } from "@/services/movieService";
import { MovieFormValues } from "@/types/movie";

export default function NewMoviePage() {
  const router = useRouter();

  const handleCreateMovie = async (values: MovieFormValues) => {
    const movie = movieService.createMovie(values);

    router.push(`/movies/${movie.id}?created=true`);
  };

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Ajouter un film</h1>

      <MovieForm onSubmit={handleCreateMovie} />
    </main>
  );
}
