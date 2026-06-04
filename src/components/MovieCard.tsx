import Link from "next/link";
import { Movie } from "@/types/movie";

type MovieCardProps = {
  movie: Movie;
};

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <article
      className="border rounded p-4"
      data-testid={`movie-card-${movie.id}`}
    >
      <h2 className="font-semibold">{movie.title}</h2>

      <p>{movie.id}</p>

      <p>{movie.director}</p>

      <p>{movie.releaseYear}</p>

      <Link
        href={`/movies/${movie.id}`}
        className="underline"
        data-testid={`view-movie-${movie.id}`}
      >
        Page du film
      </Link>
    </article>
  );
}
