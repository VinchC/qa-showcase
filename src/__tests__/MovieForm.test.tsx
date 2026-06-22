import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import MovieForm from "@/components/MovieForm";

describe("MovieForm", () => {
  describe("Create Movie", () => {
    it("TC-001 creates a movie with valid data", async () => {
      const user = userEvent.setup();

      const onSubmit = jest.fn();

      render(<MovieForm onSubmit={onSubmit} />);

      await user.type(screen.getByTestId("movie-title"), "Test");

      await user.type(screen.getByTestId("movie-director"), "Pops");

      await user.clear(screen.getByTestId("movie-release-year"));

      await user.type(screen.getByTestId("movie-release-year"), "2026");

      await user.click(screen.getByTestId("save-movie"));

      expect(onSubmit).toHaveBeenCalledTimes(1);

      expect(onSubmit).toHaveBeenCalledWith({
        title: "Test",

        director: "Pops",

        releaseYear: 2026,
      });
    });
    it("TC-002 prevents movie creation when title is missing", async () => {
      const user = userEvent.setup();

      const onSubmit = jest.fn();

      render(<MovieForm onSubmit={onSubmit} />);

      await user.type(screen.getByTestId("movie-director"), "Paps");

      await user.clear(screen.getByTestId("movie-release-year"));

      await user.type(screen.getByTestId("movie-release-year"), "2000");

      await user.click(screen.getByTestId("save-movie"));

      expect(onSubmit).not.toHaveBeenCalled();

      expect(screen.getByText("Le titre est obligatoire.")).toBeInTheDocument();
    });
  });
});
