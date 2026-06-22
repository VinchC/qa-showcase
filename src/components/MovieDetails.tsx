"use client";

import { useState } from "react";

import Link from "next/link";

import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

import DeleteConfirmationModal from "@/components/DeleteConfirmationModal";

import { movieService } from "@/services/movieService";

import { useSearchParams } from "next/navigation";

import SuccessMessage from "@/components/SuccessMessage";

export default function MovieDetails() {
  const router = useRouter();

  const params = useParams();

  const searchParams = useSearchParams();

  const created = searchParams.get("created");

  const movie = movieService.getMovieById(params.id as string);

  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!movie) {
    return (
      <main className="max-w-2xl mx-auto p-6">Ce film n&apos;existe pas</main>
    );
  }

  const handleDelete = () => {
    movieService.deleteMovie(movie.id);

    router.push("/");
  };

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold" data-testid="movie-title">
        {created === "true" && (
          <SuccessMessage
            message="
      Le film a bien été créé.
    "
          />
        )}
        {movie.title}
      </h1>

      <p className="mt-4">Réalisateur-rice : {movie.director}</p>

      <p>Date de sortie : {movie.releaseYear}</p>

      <div className="flex gap-3 mt-6">
        <Link
          href={`/movies/${movie.id}/edit`}
          className="border rounded px-4 py-2"
          data-testid="edit-movie"
        >
          Mettre à jour
        </Link>

        <button
          onClick={() => setIsModalOpen(true)}
          className="border rounded px-4 py-2"
          data-testid="delete-movie"
        >
          Supprimer
        </button>
      </div>

      <DeleteConfirmationModal
        isOpen={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onConfirm={handleDelete}
      />
    </main>
  );
}
