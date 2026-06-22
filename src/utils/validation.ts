import { MovieFormValues } from "@/types/movie";
import { ERROR_MESSAGES } from "../constants/errorMessages";

export function validateMovie(values: MovieFormValues): string[] {
  const errors: string[] = [];

  if (!values.title.trim()) {
    errors.push(ERROR_MESSAGES.REQUIRED_TITLE);
  }

  if (!values.director.trim()) {
    errors.push(ERROR_MESSAGES.REQUIRED_DIRECTOR);
  }

  if (!values.releaseYear) {
    errors.push(ERROR_MESSAGES.REQUIRED_RELEASE_YEAR);
  }

  const currentYear = new Date().getFullYear();

  if (values.releaseYear < 1888) {
    errors.push(ERROR_MESSAGES.INVALID_RELEASE_YEAR);
  } else if (values.releaseYear > currentYear) {
    errors.push(ERROR_MESSAGES.FUTURE_RELEASE_YEAR);
  }

  return errors;
}
