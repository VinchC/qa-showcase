import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import MovieForm from "@/components/MovieForm";

describe("MovieForm", () => {
  it("creates a movie with valid data", async () => {
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
});
