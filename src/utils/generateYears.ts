import { CURRENT_YEAR, MOVIE_RULES } from "@/constants/movieRules";

export function generateYears(): number[] {
  const years: number[] = [];

  for (let year = CURRENT_YEAR; year >= MOVIE_RULES.MIN_RELEASE_YEAR; year--) {
    years.push(year);
  }

  return years;
}
