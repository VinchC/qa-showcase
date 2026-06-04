"use client";

import { useEffect, useState } from "react";

import { Movie } from "@/types/movie";

import { movieService } from "@/services/movieService";

export function useMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const refreshMovies = () => {
    setMovies(movieService.getAllMovies());
  };

  useEffect(() => {
    refreshMovies();
  }, []);

  return {
    movies,
    refreshMovies,
  };
}
