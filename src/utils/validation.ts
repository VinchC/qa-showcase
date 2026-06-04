import { MovieFormValues } from "@/types/movie";

export function validateMovie(values: MovieFormValues): string[] {
  const errors: string[] = [];

  if (!values.title.trim()) {
    errors.push("Title is required");
  }

  if (!values.director.trim()) {
    errors.push("Director is required");
  }

  const currentYear = new Date().getFullYear();

  if (values.releaseYear < 1888 || values.releaseYear > currentYear) {
    errors.push("Release year is invalid");
  }

  return errors;
}
