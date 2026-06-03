export function validateMovie(
  title: string,
  director: string,
  releaseYear: number,
): string[] {
  const errors: string[] = [];

  if (!title.trim()) {
    errors.push("Le titre est obligatoire.");
  }

  if (!director.trim()) {
    errors.push("Le nom du réalisateur/trice est obligatoire.");
  }

  const currentYear = new Date().getFullYear();

  if (releaseYear < 1888 || releaseYear > currentYear) {
    errors.push("La date de sortie n'est pas valide.");
  }

  return errors;
}
