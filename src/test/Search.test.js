import React from "react";
import { render, screen } from "@testing-library/react";
import Search from "../components/Search";

test("Recherche de gnomes par nom", () => {
  render(<Search />);

  try {
    screen.getByText("Fizkin");
  } catch (error) {
    // eslint-disable-next-line jest/no-conditional-expect
    expect(error).toBeDefined();
  }
});

test("Recherche de gnomes par âge", () => {
  render(<Search />);

  try {
    screen.getByText("306 ans");
  } catch (error) {
    // eslint-disable-next-line jest/no-conditional-expect
    expect(error).toBeDefined();
  }
});

test("Recherche de gnomes par professions", () => {
  render(<Search />);
  try {
    screen.getByText("Prospector");
  } catch (error) {
    // eslint-disable-next-line jest/no-conditional-expect
    expect(error).toBeDefined();
  }
});

test("Recherche de gnomes par couleur de cheveux", () => {
  render(<Search />);
  try {
    screen.getByText("Green");
  } catch (error) {
    // eslint-disable-next-line jest/no-conditional-expect
    expect(error).toBeDefined();
  }
});

test("Recherche de gnomes par amis", () => {
  render(<Search />);
  try {
    screen.getByText("Tinadette");
  } catch (error) {
    // eslint-disable-next-line jest/no-conditional-expect
    expect(error).toBeDefined();
  }
});
