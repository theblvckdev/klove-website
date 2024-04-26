import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./button";

test('renders with primary variant when variant is "primary"', () => {
  render(<Button variant="primary" />);
  const button = screen.getByTestId("button");
  expect(button).toHaveClass("bg-primary-0");
});

test('renders with transparent variant when variant is "transparent"', () => {
  render(<Button variant="transparent" />);
  const button = screen.getByTestId("button");
  expect(button).toHaveClass("bg-transparent");
});

test('renders with transparent variant by default when variant is neither "primary" nor "transparent"', () => {
  render(<Button variant="invalidVariant" />);
  const button = screen.getByTestId("button");
  expect(button).toHaveClass("bg-transparent");
});
