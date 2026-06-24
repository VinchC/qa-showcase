import { test, expect } from "@playwright/test";

test("PW-001 creates a movie successfully", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: "Réinitialiser" }).click();

  await page.getByRole("link", { name: "Ajouter un film" }).click();

  await expect(page).toHaveURL(/movies\/new/);

  await page.getByTestId("movie-title").fill("TestPlay");

  await page.getByTestId("movie-director").fill("Boum");

  await page.getByTestId("movie-release-year").selectOption("2026");

  await page.getByTestId("save-movie").click();

  const movies: [] = await page.evaluate(() => {
    return JSON.parse(localStorage.getItem("movies") || "[]");
  });

  expect(
    movies.some((movie: { title: string }) => movie.title === "TestPlay"),
  ).toBeTruthy();

  await expect(page.getByTestId("success-message")).toBeVisible();

  await expect(page.getByText("TestPlay")).toBeVisible();

  await expect(page.getByText("Boum")).toBeVisible();

  await expect(page.getByText("2026")).toBeVisible();

  await expect(page.url()).toContain("/movies/");
});
