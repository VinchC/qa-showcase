"use client";

import Link from "next/link";

export default function Navbar() {
  const handleResetData = () => {
    localStorage.removeItem("movies");

    location.reload();
  };

  return (
    <nav className="border-b p-4">
      <div
        className="
          max-w-4xl
          mx-auto
          flex
          justify-between
          items-center
        "
      >
        <Link href="/" className="font-bold text-lg">
          Des films et des tests
        </Link>

        <div className="flex gap-2">
          <Link
            href="/movies/new"
            className="
              border
              rounded
              px-3
              py-1
            "
          >
            Ajouter un film
          </Link>

          <button
            onClick={handleResetData}
            className="
              border
              rounded
              px-3
              py-1
            "
            data-testid="reset-data"
          >
            Réinitialiser
          </button>
        </div>
      </div>
    </nav>
  );
}
