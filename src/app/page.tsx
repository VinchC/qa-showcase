"use client";

import { useMemo } from "react";
import { useState } from "react";

import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";

import { useMovies } from "@/hooks/useMovies";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");

  const { movies } = useMovies();

  const filteredMovies = useMemo(() => {
    const normalizedTerm = searchTerm.trim().toLowerCase();

    if (!normalizedTerm) {
      return movies;
    }

    return movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(normalizedTerm) ||
        movie.director.toLowerCase().includes(normalizedTerm),
    );
  }, [movies, searchTerm]);

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1
        className="
          text-3xl
          font-bold
          mb-6
        "
      >
        Movie Collection
      </h1>

      <div className="mb-6">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
      </div>

      {filteredMovies.length === 0 && (
        <p data-testid="no-results">Aucun film trouvé.</p>
      )}

      <div className="space-y-4">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
}
