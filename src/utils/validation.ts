import { MovieFormValues } from "@/types/movie";
import { ERROR_MESSAGES } from "../constants/errorMessages";
import { MOVIE_RULES, CURRENT_YEAR } from "../constants/movieRules";

export function validateMovie(values: MovieFormValues): string[] {
  const { title, director, releaseYear } = values;
  const {
    REQUIRED_TITLE,
    REQUIRED_DIRECTOR,
    REQUIRED_RELEASE_YEAR,
    INVALID_RELEASE_YEAR,
    FUTURE_RELEASE_YEAR,
  } = ERROR_MESSAGES;

  const errors: string[] = [];

  if (!title.trim()) {
    errors.push(REQUIRED_TITLE);
  }

  if (!director.trim()) {
    errors.push(REQUIRED_DIRECTOR);
  }

  if (!releaseYear) {
    errors.push(REQUIRED_RELEASE_YEAR);
  }

  if (releaseYear && releaseYear < MOVIE_RULES.MIN_RELEASE_YEAR) {
    errors.push(INVALID_RELEASE_YEAR);
  }
  if (releaseYear && releaseYear > CURRENT_YEAR) {
    errors.push(FUTURE_RELEASE_YEAR);
  }

  return errors;
}
