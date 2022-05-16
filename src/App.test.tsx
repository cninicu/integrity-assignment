import React from "react";
import { render, screen } from "@testing-library/react";
import { Header } from "./modules/components/Header";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { Bag } from "./modules/components";

test("renders hello menu", () => {
  const history = createMemoryHistory();
  history.push("/all");
  render(
    <Router location={history.location} navigator={history}>
      <Header />
    </Router>
  );
  const hello = screen.getByText(/hello/i);
  expect(hello).toBeInTheDocument();
});

test("search input", () => {
  const history = createMemoryHistory();
  history.push("/bag");
  render(
    <Router location={history.location} navigator={history}>
      <Bag />
    </Router>
  );

  const searchInput = screen.getByPlaceholderText(/search/i);

  expect(searchInput).toBeInTheDocument();
});
