"use client";

import { useState } from "react";

import { Movie, MovieFormValues } from "@/types/movie";

import { validateMovie } from "@/utils/validation";

type UseMovieFormProps = {
  initialMovie?: Movie;
  onSubmit: (values: MovieFormValues) => void;
};

export function useMovieForm({ initialMovie, onSubmit }: UseMovieFormProps) {
  const [title, setTitle] = useState(initialMovie?.title ?? "");

  const [director, setDirector] = useState(initialMovie?.director ?? "");

  const [releaseYear, setReleaseYear] = useState(
    initialMovie?.releaseYear ?? 2000,
  );

  const [isLoading, setIsLoading] = useState(false);

  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const values = {
      title,
      director,
      releaseYear,
    };

    const validationErrors = validateMovie(values);

    if (validationErrors.length > 0) {
      setErrors(validationErrors);

      return;
    }

    setErrors([]);

    setIsLoading(true);

    try {
      await onSubmit(values);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    title,
    director,
    releaseYear,
    errors,

    isLoading,

    setTitle,
    setDirector,
    setReleaseYear,

    handleSubmit,
  };
}
